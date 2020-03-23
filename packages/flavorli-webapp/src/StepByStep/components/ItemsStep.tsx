import React from 'react';
import {Stack, Text, H2} from '@flavorli/elements';
import styled from 'styled-components';
import {IItem} from '../../types';

interface IItemsStepProps {
  items: IItem[];
}
const ItemsStep = ({items}: IItemsStepProps) => {
  return (
    <Stack
      width="100%"
      gap={16}
      background="surface"
      padding={24}
      shadow="LIGHT"
      borderRadius={8}
    >
      <H2>Items</H2>
      <Stack width="100%">
        {items.map((item, index) => {
          return (
            <Label
              htmlFor={`item-${item.name}-${item.qty}`}
              key={`item-${item.name}-${item.qty}`}
            >
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
            </Label>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ItemsStep;

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
  display: flex;
  width: 100%;
  padding: 8px 0;
  width: 100%;
`;

const Dot = styled.div`
  position: absolute;
  top: 6px;
  left: -24px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.textColor};
`;
