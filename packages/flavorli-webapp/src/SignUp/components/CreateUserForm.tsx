import React from 'react';
import {Stack, Button, Input, Label, Icon, Text} from '@flavorli/elements';
import {IconName} from '@flavorli/elements/lib/miscellaneous/Icon';
import {useCognitoUserContext} from '../useCognitoUserContext';
import {createUser} from '../awsAuth';

function CreateUserForm() {
  const {user, setUser, stage, setStage} = useCognitoUserContext();

  async function onCreateUser(e: any) {
    e.preventDefault();
    const {result, err} = await createUser(user);
    if (err) {
      alert(JSON.stringify(err));
    }

    if (result) {
      setStage(2);
    }
  }

  return stage === 1 ? (
    <form onSubmit={onCreateUser}>
      <Stack gap={16} width="100%">
        <Stack gap={4} width="100%">
          <Label>PRONOUNS</Label>
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
              onClick={() => setUser({pronouns: 'he/him'})}
            />

            <Pronoun
              selected={user.pronouns === 'she/her'}
              iconName="chef_female"
              pronouns="she/her"
              onClick={() => setUser({pronouns: 'she/her'})}
            />

            <Pronoun
              selected={user.pronouns === 'they/them'}
              iconName="chef_they"
              pronouns="they/them"
              onClick={() => setUser({pronouns: 'they/them'})}
            />
          </Stack>
        </Stack>

        <Stack gap={4} width="100%">
          <Label>USERNAME</Label>
          <Input
            width="100%"
            onChange={e => setUser({username: e.target.value})}
            type="text"
            placeholder="pn"
          />
        </Stack>

        <Stack gap={4} width="100%">
          <Label>EMAIL</Label>
          <Input
            width="100%"
            onChange={e => setUser({email: e.target.value})}
            type="email"
            placeholder="pn@flavor.li"
          />
        </Stack>

        <Stack gap={4} width="100%">
          <Label>PHONE</Label>
          <Input
            width="100%"
            onChange={e => setUser({phone: e.target.value})}
            type="tel"
            placeholder="+447960778401"
          />
        </Stack>
        <Stack gap={4} width="100%">
          <Label>PASSWORD</Label>
          <Input
            width="100%"
            onChange={e => setUser({password: e.target.value})}
            type="password"
            placeholder="****"
          />
        </Stack>
        <Button width="100%">Sign Up</Button>
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
      <Text fontSize={14}>{pronouns}</Text>
    </Stack>
  );
};
