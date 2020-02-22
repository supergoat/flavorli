import React from 'react';
import {Stack, Button, Input, Label, Icon, Text} from '@flavorli/elements';
import styled from 'styled-components';
import CreateUserForm from './components/CreateUserForm';
import PhoneVerificationForm from './components/PhoneVerificationForm';
import {CognitoUserProvider} from './useCognitoUserContext';

function SignUp() {
  return (
    <Stack alignment="center" height="100%" width="100%" gap={16} overflowY>
      <CognitoUserProvider>
        <FormContainer>
          <Stack gap={16} alignment="center">
            <Logo>flavor.li</Logo>
            <Text>Eat Healthy</Text>
          </Stack>

          <CreateUserForm />

          <PhoneVerificationForm />
        </FormContainer>
      </CognitoUserProvider>
    </Stack>
  );
}

export default SignUp;

const Logo = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[48]};
`;

const FormContainer = styled.div`
  width: 100vw;
  max-width: 300px;
  padding: ${p => `${p.theme.spacings[64]}px 0`};
`;
