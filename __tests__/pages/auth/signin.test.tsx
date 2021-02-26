import SignIn from '@pages/auth/signin';
import { fireEvent, render } from '@testing-library/react';

describe('<SignIn>', () => {
  it('should render the SignIn component', async () => {
    const { getByText } = render(<SignIn />);

    const googleSignInBtn = getByText('Sign in with Google');

    expect(googleSignInBtn).toBeInTheDocument();

    fireEvent.click(googleSignInBtn);
  });
});
