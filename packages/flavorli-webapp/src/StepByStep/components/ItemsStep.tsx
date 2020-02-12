import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';
import {IItem} from '../../types';
import Step from './Step';

interface IItemsStepProps {
  items: IItem[];
}
const ItemsStep = ({items}: IItemsStepProps) => {
  return (
    <Step>
      <Stack gap={4} paddingBottom={8}>
        <Heading>Mise en place</Heading>
        <SubHeading>Items</SubHeading>
      </Stack>

      <Text>
        Make sure that you have all of your equipment ready and available to use
      </Text>

      <Stack gap={8} width="100%">
        {items.map((item, index) => {
          return (
            <Stack direction="horizontal" gap={8} key={`item-${index}`}>
              <CheckBox id={`item-${item.name}`} />
              <Stack gap={4} width="100%">
                <label htmlFor={`item-${item.name}-${item.qty}`}>
                  {item.link ? (
                    <Link target="_blank" href={item.link}>
                      {item.qty} {item.name}
                    </Link>
                  ) : (
                    <>
                      {item.qty} {item.name}
                    </>
                  )}
                </label>
                <Text intent="secondary">{item?.notes}</Text>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Step>
  );
};

export default ItemsStep;

const Heading = styled.h1`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[32]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const CheckBox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  flex-shrink: 0;
  margin-right: 8px;
`;

const Link = styled.a`
  color: ${p => p.theme.colors.primary};
`;
