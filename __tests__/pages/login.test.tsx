import Login from '@pages/login';
import { render } from '@testing-library/react';

describe('Login', () => {
  it('should render the login page', () => {
    const { getByText } = render(<Login />);

    const emailInput = getByText('email');
    const passwordInput = getByText('password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
