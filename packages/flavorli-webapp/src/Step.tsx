import React from 'react';
import {Stack, Text, H3, H1, Scroll} from '@flavorli/elements';
import {IStep} from './types';
import Timer from './Timer';
import Notification from './Notification';
import styled from 'styled-components';

interface IStepProps {
  step: IStep;
  className?: string;
}
export default ({step, className}: IStepProps) => {
  return (
    <Stack className={className} paddingTop={48} width="100%">
      <Stack
        distribution="start"
        width="100%"
        height="100%"
        background="surface"
        borderRadiusTopLeft={16}
        borderRadiusTopRight={16}
        paddingBottom={24}
      >
        <Stack paddingLeft={24} paddingTop={24} width="100%">
          <H1 intent="secondary">{step.no}</H1>
        </Stack>
        <Scroll>
          <Stack
            paddingTop={48}
            paddingRight={16}
            paddingLeft={48}
            gap={16}
            height="100%"
            width="100%"
          >
            <Stack
              distribution="center"
              width="auto"
              paddingTop={4}
              paddingRight={16}
              paddingLeft={16}
              paddingBottom={4}
              borderRadius={4}
              background="primary"
            >
              <Text intent="textOnPrimary"> {step.tag.text}</Text>
            </Stack>

            {!!step.notifications.length && (
              <Stack gap={8} alignment="start" width="100%" height="auto">
                {step.notifications.map(notification => {
                  return <Notification notification={notification} />;
                })}
              </Stack>
            )}

            {!!step.kitchenwareItems.length && (
              <Stack gap={8} width="100%">
                <H3>You will need</H3>

                {step.kitchenwareItems.map(kitchenwareItme => {
                  return (
                    <Text intent="secondary">
                      {kitchenwareItme.qty} {kitchenwareItme.name}
                    </Text>
                  );
                })}
              </Stack>
            )}

            {!!step.ingredients.length && (
              <Stack gap={8} width="100%">
                <H3>Ingredients</H3>

                {step.ingredients.map(ingredient => {
                  return (
                    <Text intent="secondary">
                      {ingredient.qty} {ingredient.name}
                    </Text>
                  );
                })}
              </Stack>
            )}

            <Text spacing={{line: '1.5'}}>{step.description}</Text>

            {step.timer && (
              <Timer
                minutes={step.timer.minutes}
                seconds={step.timer.seconds}
              />
            )}
          </Stack>
        </Scroll>
      </Stack>
    </Stack>
  );
};
