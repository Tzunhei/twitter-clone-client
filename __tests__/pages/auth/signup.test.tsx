import SignUp from '@pages/auth/signup';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('<SignUp/>', () => {
  beforeEach(() => {
    render(<SignUp />);
  });

  it('should display a signup form', () => {
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('username-input')).toBeInTheDocument();
    expect(screen.getByTestId('first_name-input')).toBeInTheDocument();
    expect(screen.getByTestId('last_name-input')).toBeInTheDocument();
    expect(screen.getByTestId('biography-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(
      screen.getByTestId('password_confirmation-input'),
    ).toBeInTheDocument();
  });

  it('should display error messages on empty fields', async () => {
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('email is a required field')).toBeInTheDocument();
      expect(
        screen.getByText('username is a required field'),
      ).toBeInTheDocument();
    });
  });

  it("should display an error message if password don't match", async () => {
    fireEvent.input(screen.getByTestId('password-input'), {
      target: { value: 'password' },
    });
    fireEvent.input(screen.getByTestId('password_confirmation-input'), {
      target: { value: 'false_password' },
    });
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('passwords must match'));
    });
  });
});
