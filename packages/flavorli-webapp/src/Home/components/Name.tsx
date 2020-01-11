import React from 'react';
import {Text, Button} from '@flavorli/elements';
import {useHistory} from 'react-router';

interface INameProps {
  id: string;
  name: string;
}

const Name = ({id, name}: INameProps) => {
  const history = useHistory();

  const onNavigateToRecipe = () => {
    history.push(`/recipe/${id}`);
  };

  return (
    <Button intent="text" onClick={onNavigateToRecipe}>
      <Text fontSize={24} color="primary">
        {name}
      </Text>
    </Button>
  );
};

export default Name;
