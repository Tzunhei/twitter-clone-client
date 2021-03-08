import SignIn from '@pages/auth/signin';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import client from 'next-auth/client';
jest.mock('next-auth/client');

describe('<SignIn>', () => {
  beforeEach(() => {
    render(<SignIn />);
  });

  it('should render the SignIn component', async () => {
    const usernameInputField = screen.getByTestId('username-input');
    const passwordInputField = screen.getByTestId('password-input');
    const signInButton = screen.getByRole('button');

    expect(usernameInputField).toBeInTheDocument();
    expect(passwordInputField).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
  it('should display errors on click sign in button with empty input fields', async () => {
    const signInButton = screen.getByRole('button');

    fireEvent.submit(signInButton);

    await waitFor(() => {
      expect(
        screen.getByText('username is a required field'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('password is a required field'),
      ).toBeInTheDocument();
    });
  });
  it('should call signIn function on submit', async () => {
    (client.useSession as jest.Mock).mockReturnValueOnce([undefined, false]);
    client.signIn = jest.fn();

    const usernameInputField = screen.getByTestId('username-input');
    const passwordInputField = screen.getByTestId('password-input');
    const signInButton = screen.getByRole('button');

    fireEvent.input(usernameInputField, { target: { value: 'Super' } });
    fireEvent.input(passwordInputField, { target: { value: 'password' } });

    fireEvent.submit(signInButton);

    await waitFor(() => {
      expect(client.signIn).toHaveBeenCalledTimes(1);
    });
  });
});
