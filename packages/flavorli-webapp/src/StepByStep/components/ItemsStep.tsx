import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';
import {IItem} from '../../types';

interface IItemsStepProps {
  items: IItem[];
}
const ItemsStep = ({items}: IItemsStepProps) => {
  return (
    <Stack width="100%" gap={16}>
      <Dot />
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
  width: 100%;
  padding: 8px 0;
`;

const Dot = styled.div`
  position: absolute;
  top: 4px;
  left: -24px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  border: 2px solid ${p => p.theme.colors.tagRed};
`;
