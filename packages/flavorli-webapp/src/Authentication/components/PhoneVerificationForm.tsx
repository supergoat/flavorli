import React from 'react';
import {Stack, Button, Input, Label} from '@flavorli/elements';
import {verifyPhoneNumber, authenticate} from '../../helpers/auth';
import {useNewUserContext} from '../useCognitoUserContext';
import {useAuthContext} from '../../helpers/auth/useAuthContext';

function PhoneVerificationForm() {
  const {setCognitoUser} = useAuthContext();

  const {user, stage} = useNewUserContext();

  const [code, setCode] = React.useState('');

  async function onSubmitVerificationCode(e: any) {
    e.preventDefault();

    const {result, err} = await verifyPhoneNumber(user.username, code);

    if (err) {
      alert('VERIFICATION ERROR' + JSON.stringify(err));
    }

    if (result) {
      const {result, err} = await authenticate(user.username, user.password);
      if (result) {
        setCognitoUser(result);
      }

      if (err) {
        alert(
          'AUTHENTICATION ERROR' + err.message ||
            'AUTHENTICATION ERROR' + JSON.stringify(err),
        );
      }
    }
  }

  return stage === 2 ? (
    <form onSubmit={onSubmitVerificationCode} style={{width: '100%'}}>
      <Stack gap={16} width="100%">
        <Stack gap={4} width="100%">
          <Label>Code</Label>
          <Input
            width="100%"
            onChange={e => setCode(e.target.value)}
            type="text"
            placeholder="code"
          />
        </Stack>

        <Button width="100%">Verify</Button>
      </Stack>
    </form>
  ) : null;
}

export default PhoneVerificationForm;
