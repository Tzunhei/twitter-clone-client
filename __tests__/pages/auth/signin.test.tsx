import SignIn from '@pages/auth/signin';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-test-renderer';
jest.mock('next-auth/client'); // SoundPlayer is now a mock constructor

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
  it('should redirect user to homepage on successful login', async () => {
    const usernameInputField = screen.getByTestId('username-input');
    const passwordInputField = screen.getByTestId('password-input');
    const signInButton = screen.getByRole('button');

    fireEvent.input(usernameInputField, { target: { value: 'Super' } });
    fireEvent.input(passwordInputField, { target: { value: 'password' } });

    act(() => {
      fireEvent.submit(signInButton);
    });
  });
});
