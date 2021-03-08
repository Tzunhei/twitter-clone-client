import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

interface IAuthContainerProps {
  children: React.ReactNode;
  title: string;
}

const AuthContainer = (props: IAuthContainerProps) => {
  const { children, title } = props;

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={8}>
        <Typography align="center" variant="h5">
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
};

export default AuthContainer;
