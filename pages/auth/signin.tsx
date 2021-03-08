import AuthContainer from '@components/Auth/AuthContainer';
import LoginForm from '@components/Auth/LoginForm';

const SignIn = () => {
  return (
    <AuthContainer title="Sign In">
      <LoginForm />
    </AuthContainer>
  );
};

export default SignIn;
