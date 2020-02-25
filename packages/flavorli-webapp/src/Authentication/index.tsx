import React from 'react';
import {Stack, Button, Input, Label, Icon, Text} from '@flavorli/elements';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';
import CreateUserForm from './components/CreateUserForm';
import PhoneVerificationForm from './components/PhoneVerificationForm';
import {NewUserProvider} from './useCognitoUserContext';
import {useLocation, Redirect} from 'react-router';
import {useAuthContext} from '../helpers/auth/useAuthContext';

function Authentication() {
  const {cognitoUser} = useAuthContext();
  const location = useLocation();
  const {from} = location.state || {from: {pathname: '/'}};
  const [hasAccount, setHasAccount] = React.useState(false);

  if (cognitoUser) {
    return <Redirect to={from.pathname} />;
  }

  return (
    <Stack alignment="center" height="100%" width="100%" overflowY>
      <FormContainer>
        <Stack gap={16} width="100%">
          <Stack gap={16} alignment="center" width="100%">
            <Logo>flavor.li</Logo>
            <Text>Eat Healthy</Text>
          </Stack>

          {hasAccount && <LoginForm />}

          {!hasAccount && (
            <NewUserProvider>
              <CreateUserForm />

              <PhoneVerificationForm />
            </NewUserProvider>
          )}

          <Stack
            gap={16}
            width="100%"
            style={{
              borderTop: '1px solid #eee',
            }}
            paddingTop={16}
          >
            <Text>
              {!hasAccount
                ? 'Already have an account?'
                : "Don't have an account yet?"}{' '}
            </Text>
            <Button
              width="100%"
              onClick={() => setHasAccount(a => !a)}
              intent="secondary"
            >
              {!hasAccount ? 'Log In' : 'Create Account'}
            </Button>
          </Stack>
        </Stack>
      </FormContainer>
    </Stack>
  );
}

export default Authentication;

const Logo = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[48]};
`;

const FormContainer = styled.div`
  width: 100vw;
  max-width: 300px;
  padding: ${p => `${p.theme.spacings[32]}px 0`};
`;
