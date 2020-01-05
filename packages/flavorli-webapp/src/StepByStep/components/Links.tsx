import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';
import {ILink} from '../types';
import {useTimersContext} from '../helpers/timersContext';
import {useStepsContext} from '../helpers/StepByStepContext';

interface ILinksProps {
  links: ILink[];
}
const Links = ({links}: ILinksProps) => {
  const {timers} = useTimersContext();
  const {onOpenDialogStep} = useStepsContext();

  return !!links.length ? (
    <Stack gap={8} alignment="start" width="100%" height="auto">
      {links.map(link => {
        return (
          <Stack
            key={link.name}
            borderRadius={2}
            width="100%"
            background="secondary"
            paddingTop={8}
            paddingRight={16}
            paddingBottom={8}
            paddingLeft={16}
            gap={4}
          >
            <Stack
              direction="horizontal"
              distribution="space-between"
              alignment="end"
              width="100%"
            >
              <Stack gap={4}>
                <Text intent="secondary" fontSize={14}>
                  {link.heading}
                </Text>
                <Text color="primary">{link.name}</Text>
              </Stack>
              <Stack gap={4} alignment="end">
                {link.timerId && (
                  <Text color="primary" data-testid={`timerid-${link.timerId}`}>
                    {timers[link.timerId].minutes}m{' '}
                    {timers[link.timerId].seconds}s
                  </Text>
                )}

                <Button
                  intent="text"
                  onClick={() => onOpenDialogStep(link.from)}
                >
                  View Step
                </Button>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  ) : null;
};

export default Links;
