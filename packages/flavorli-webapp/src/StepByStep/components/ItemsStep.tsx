import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';
import {IItem} from '../types';
import Step from './Step';
import BoxSvg from '../icons/box.svg';

interface IItemsStepProps {
  items: IItem[];
}
const ItemsStep = ({items}: IItemsStepProps) => {
  return (
    <Step background="primary" image={BoxSvg}>
      <Stack gap={4} paddingBottom={8}>
        <Heading>Mise en place</Heading>
        <SubHeading>Items</SubHeading>
      </Stack>

      <Stack gap={8} width="100%">
        {items.map(item => {
          return (
            <Stack direction="horizontal" gap={16} width="100%" key={item.name}>
              <ItemQty width="5%" align="right">
                {item.qty}
              </ItemQty>
              <ItemName>{item.name}</ItemName>
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
  color: ${p => p.theme.colors.white};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.secondaryDark};
  font-weight: normal;
`;

const ItemQty = styled(Text)`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[20]};
  color: ${p => p.theme.colors.secondaryDark};
  font-weight: normal;
`;

const ItemName = styled(Text)`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[20]};
  color: ${p => p.theme.colors.white};
  font-weight: normal;
`;
