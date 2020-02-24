import React from 'react';
import {Stack, Label, Button, Input, Text} from '@flavorli/elements';
import {authenticate} from '../../helpers/auth';
import {useAuthContext} from '../../helpers/auth/useAuthContext';

function LoginForm() {
  const {setCognitoUser} = useAuthContext();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState<{
    username: string;
    password: string;
  }>({username: '', password: ''});
  const [isLoading, setIsLoading] = React.useState(false);

  const isUsernameBlank = username.trim() === '';
  const isPasswordBlank = password.trim() === '';

  const isFormDisabled = isUsernameBlank || isPasswordBlank || isLoading;

  function isLoginFormValid() {
    if (isUsernameBlank) {
      setErrors(e => ({
        ...e,
        username: 'Username is required',
      }));
    }

    if (isPasswordBlank) {
      setErrors(e => ({
        ...e,
        password: 'Password is required',
      }));
    }

    return !isUsernameBlank && !isPasswordBlank;
  }

  async function onLogin(e: any) {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    if (!isLoginFormValid()) {
      return;
    }

    setIsLoading(true);
    const {result, err} = await authenticate(username, password);
    setIsLoading(false);

    if (result) {
      setCognitoUser(result);
    }

    if (err) {
      setErrors(e => ({
        ...e,
        password: 'Incorrect username or password',
      }));
    }
  }

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(e => ({
      ...e,
      username: '',
    }));
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(e => ({
      ...e,
      password: '',
    }));
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={onLogin} style={{width: '100%'}}>
      <Stack gap={16} width="100%">
        <Stack gap={4} width="100%">
          <Label>USERNAME</Label>
          <Input
            width="100%"
            hasError={errors['username']}
            value={username}
            onChange={onUsernameChange}
            type="text"
            placeholder="pn"
          />
          <Text color="error">{errors['username']}</Text>
        </Stack>

        <Stack gap={4} width="100%">
          <Label>PASSWORD</Label>
          <Input
            width="100%"
            hasError={errors['password']}
            value={password}
            onChange={onPasswordChange}
            type="password"
            placeholder="****"
          />
          <Text color="error">{errors['password']}</Text>
        </Stack>
        <Button width="100%" disabled={isFormDisabled}>
          {isLoading ? 'Loading...' : 'Log In'}
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
