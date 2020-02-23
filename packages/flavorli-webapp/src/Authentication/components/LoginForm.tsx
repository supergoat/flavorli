import React from 'react';
import {Stack, Label, Button, Input} from '@flavorli/elements';
import {authenticate} from '../../helpers/auth';
import {useAuthContext} from '../../helpers/auth/useAuthContext';

function LoginForm() {
  const {setCognitoUser} = useAuthContext();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState();

  async function onLogin(e: any) {
    e.preventDefault();
    const {result, err} = await authenticate(username, password);

    if (result) {
      setCognitoUser(result);
    }

    if (err) {
      setErrors(err);
    }
  }

  return (
    <form onSubmit={onLogin} style={{width: '100%'}}>
      <Stack gap={16} width="100%">
        <Stack gap={4} width="100%">
          <Label>USERNAME</Label>
          <Input
            width="100%"
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
            placeholder="pn"
          />
        </Stack>

        <Stack gap={4} width="100%">
          <Label>PASSWORD</Label>
          <Input
            width="100%"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="****"
          />
        </Stack>
        <Button width="100%">Log In</Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
