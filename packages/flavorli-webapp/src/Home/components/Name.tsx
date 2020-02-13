import React from 'react';
import {Text, Button} from '@flavorli/elements';

interface INameProps {
  name: string;
}

const Name = ({name}: INameProps) => {
  return (
    <Button intent="text">
      <Text fontSize={24} color="primary">
        {name}
      </Text>
    </Button>
  );
};

export default Name;
