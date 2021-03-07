import SignIn from '@pages/auth/signin';
import { render } from '@testing-library/react';

describe('<SignIn>', () => {
  it('should render the SignIn component', async () => {
    const { getByText } = render(<SignIn />);

    const usernameInputField = getByText('username');
    const passwordInputField = getByText('password');
    const signInButton = getByText('Sign In');

    expect(usernameInputField).toBeInTheDocument();
    expect(passwordInputField).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
});
