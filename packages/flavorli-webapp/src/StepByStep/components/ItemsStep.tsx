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

      <Stack>
        {items.map((item, index) => {
          return (
            <Label
              htmlFor={`item-${item.name}-${item.qty}`}
              key={`item-${item.name}-${item.qty}`}
            >
              <Stack direction="horizontal" alignment="center">
                <CheckBox id={`item-${item.name}-${item.qty}`} />
                <div>
                  {item.link ? (
                    <Link target="_blank" href={item.link}>
                      {item.qty} {item.name}
                    </Link>
                  ) : (
                    <>
                      {item.qty} {item.name}
                    </>
                  )}
                  <Text intent="secondary">{item?.notes}</Text>
                </div>
              </Stack>
            </Label>
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

const Label = styled.label`
  width: 100%;
  padding: 8px 0;
`;
