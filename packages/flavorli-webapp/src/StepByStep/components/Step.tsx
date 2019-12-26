import React from 'react';
import {Stack, Text, Scroll} from '@flavorli/elements';
import {IStep} from '../types';
import Timer from './Timer';
import Links from './Links';
import Tag from './Tag';
import Kitchenware from './Kitchenware';
import Ingredients from './Ingredients';

interface IStepProps {
  step: IStep;
  className?: string;
}
export default ({step, className}: IStepProps) => {
  return (
    <Stack
      className={className}
      width="100%"
      height="100%"
      background="surface"
      borderRadiusTopLeft={16}
      borderRadiusTopRight={16}
      paddingBottom={24}
      role="group"
      aria-label={`Step ${step.no}`}
    >
      <Stack paddingLeft={24} paddingTop={24} width="100%">
        <Text fontSize={32} intent="secondary">
          {step.no}
        </Text>
      </Stack>

      <Scroll>
        <Stack
          paddingTop={48}
          paddingRight={48}
          paddingLeft={48}
          gap={16}
          height="100%"
          width="100%"
        >
          <Tag tag={step.tag} />

          <Links links={step.links} />

          <Kitchenware kitchenware={step.kitchenware} />

          <Ingredients ingredients={step.ingredients} />

          <Text spacing={{line: '1.5'}}>{step.description}</Text>

          <Timer timer={step.timer} />
        </Stack>
      </Scroll>
    </Stack>
  );
};
