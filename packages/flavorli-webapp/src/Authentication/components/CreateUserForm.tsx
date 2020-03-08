import React from 'react';
import {Stack, Button, Input, Label, Icon, Text} from '@flavorli/elements';
import {IconName} from '@flavorli/elements/lib/miscellaneous/Icon';
import {useNewUserContext} from '../useCognitoUserContext';
import {createNewUser} from '../../helpers/auth';

export const PASSWORD_REGEX = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$*.{}?"!@#%&/,><\':;|_~`^\\]\\[\\)\\(]).{6,}',
);

function CreateUserForm() {
  const {user, setUser, stage, setStage} = useNewUserContext();
  const [errors, setErrors] = React.useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    pronouns: '',
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPasswordInfo, setShowPasswordInfo] = React.useState(false);

  const isUsernameBlank = user.username.trim() === '';
  const isPasswordBlank = user.password.trim() === '';
  const isPasswordValid = PASSWORD_REGEX.test(user.password);
  const isPronounsBlank = user.pronouns.trim() === '';
  const isPhoneNumberBlank = user.phone.trim() === '';
  const isEmailBlank = user.email.trim() === '';

  const isButtonDisabled = isLoading;

  async function onCreateUser(e: any) {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    if (!isCreateUserFormValid()) {
      return;
    }
    setIsLoading(true);
    const {result, err} = await createNewUser(user);
    setIsLoading(false);

    if (result) {
      setStage(2);
    }

    if (err) {
      setErrors(e => ({
        ...e,
        password: err.message,
      }));
    }
  }

  function isCreateUserFormValid() {
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

    if (!isPasswordValid) {
      setErrors(e => ({
        ...e,
        password: 'Password is invalid',
      }));
    }

    if (isPronounsBlank) {
      setErrors(e => ({
        ...e,
        pronouns: 'Please select your pronouns',
      }));
    }

    if (isEmailBlank) {
      setErrors(e => ({
        ...e,
        email: 'Email is required',
      }));
    }

    if (isPhoneNumberBlank) {
      setErrors(e => ({
        ...e,
        phone: 'Phone is required',
      }));
    }

    return !isUsernameBlank && !isPasswordBlank;
  }

  const onChange = (field: string, value: string) => {
    setErrors(e => ({
      ...e,
      [field]: '',
    }));
    setUser({[field]: value});
  };

  return stage === 1 ? (
    <form onSubmit={onCreateUser} style={{width: '100%'}}>
      <Stack gap={16} width="100%">
        <Stack gap={4} width="100%">
          <Label>Avatar</Label>
          <Stack
            direction="horizontal"
            gap={8}
            width="100%"
            distribution="space-between"
          >
            <Pronoun
              selected={user.pronouns === 'he/him'}
              iconName="chef_male"
              pronouns="he/him"
              onClick={() => onChange('pronouns', 'he/him')}
            />

            <Pronoun
              selected={user.pronouns === 'she/her'}
              iconName="chef_female"
              pronouns="she/her"
              onClick={() => onChange('pronouns', 'she/her')}
            />

            <Pronoun
              selected={user.pronouns === 'they/them'}
              iconName="chef_they"
              pronouns="they/them"
              onClick={() => onChange('pronouns', 'they/them')}
            />
          </Stack>
          <Text color="error">{errors['pronouns']}</Text>
        </Stack>

        <Stack gap={4} width="100%">
          <Label>USERNAME</Label>
          <Input
            width="100%"
            value={user.username}
            onChange={e => onChange('username', e.target.value)}
            type="text"
            placeholder="pn"
            hasError={errors['username']}
          />
          <Text color="error">{errors['username']}</Text>
        </Stack>

        <Stack gap={4} width="100%">
          <Label>EMAIL</Label>
          <Input
            width="100%"
            value={user.email}
            onChange={e => onChange('email', e.target.value)}
            type="email"
            placeholder="pn@flavor.li"
            hasError={errors['email']}
          />
          <Text color="error">{errors['email']}</Text>
        </Stack>

        <Stack gap={4} width="100%">
          <Label>PHONE</Label>
          <Input
            width="100%"
            value={user.phone}
            onChange={e => onChange('phone', e.target.value)}
            type="tel"
            placeholder="+447960778401"
            hasError={errors['phone']}
          />
          <Text color="error">{errors['phone']}</Text>
        </Stack>

        <Stack gap={4} width="100%">
          <Label>PASSWORD</Label>

          {showPasswordInfo && (
            <Stack gap={4} paddingBottom={8}>
              <Text intent="secondary" fontSize={14}>
                Must contain at least 1 lowercase alphabetical character
              </Text>
              <Text intent="secondary" fontSize={14}>
                Must contain at least 1 uppercase alphabetical character
              </Text>
              <Text intent="secondary" fontSize={14}>
                Must contain at least 1 number
              </Text>
              <Text intent="secondary" fontSize={14}>
                Must contain at least 1 special character
              </Text>
              <Text intent="secondary" fontSize={14}>
                Must be at least 6 characters long
              </Text>
            </Stack>
          )}

          <Input
            width="100%"
            onFocus={() => setShowPasswordInfo(true)}
            onBlur={() => setShowPasswordInfo(false)}
            value={user.password}
            onChange={e => onChange('password', e.target.value)}
            type="password"
            placeholder="****"
            hasError={errors['password']}
          />
          <Text color="error">{errors['password']}</Text>
        </Stack>
        <Button width="100%" disabled={isButtonDisabled}>
          {isLoading ? 'Loading...' : 'Sign Up'}
        </Button>
      </Stack>
    </form>
  ) : null;
}

export default CreateUserForm;

const Pronoun = ({
  iconName,
  pronouns,
  selected,
  onClick,
}: {
  iconName: IconName;
  pronouns: string;
  onClick: () => void;
  selected?: boolean;
}) => {
  return (
    <Stack
      role="button"
      borderRadius={4}
      padding={8}
      gap={8}
      alignment="center"
      distribution="center"
      width="calc(33% - 5px)"
      border={selected ? `1px solid #273B7A` : '1px solid #eee'}
      onClick={onClick}
      style={{cursor: 'pointer'}}
    >
      <Icon name={iconName} />
      <Button
        intent="text"
        style={{fontSize: '14px', color: 'black', fontWeight: 'normal'}}
      >
        {pronouns}
      </Button>
    </Stack>
  );
};
