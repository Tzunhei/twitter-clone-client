import Login from '@pages/login';
import { fireEvent, render, waitFor } from '@testing-library/react';

describe('Login', () => {
  it('should render the login page', () => {
    const { getByText } = render(<Login />);
    const emailInput = getByText('email');
    const passwordInput = getByText('password');
    const loginBtn = getByText('Login');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it('should throw an error on empty fields', async () => {
    const { getByText } = render(<Login />);
    const emailInput = getByText('email');
    const passwordInput = getByText('password');
    const loginBtn = getByText('Login');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    fireEvent.click(loginBtn);
    await waitFor(() => {
      expect(getByText('email is a required field')).toBeInTheDocument();
      expect(getByText('password is a required field')).toBeInTheDocument();
    });
  });
});
