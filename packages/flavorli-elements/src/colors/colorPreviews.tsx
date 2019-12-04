import React from 'react';
import {styled} from '../theme';
import {families} from '../fonts';
import {COLORS} from './';

export const PrimaryColor = () => {
  return (
    <>
      <Color color={COLORS.RED_DARK}>Primary Dark</Color>
      <Color color={COLORS.RED_500}>Primary</Color>
      <Color color={COLORS.RED_LIGHT}>Primary Light</Color>
    </>
  );
};

export const SecondaryColor = () => {
  return (
    <>
      <Color color={COLORS.PURPLE_DARK}>Secondary Dark</Color>
      <Color color={COLORS.PURPLE_500}>Secondary</Color>
      <Color color={COLORS.PURPLE_LIGHT}>Secondary Light</Color>
    </>
  );
};

export const Color = styled.div<{color: string; border?: boolean}>`
  display: inline-flex;
  align-items: flex-end;
  width: 100px;
  height: 40px;
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  color: ${props => (props.border ? COLORS.BLACK : COLORS.WHITE)};
  border: ${props => (props.border ? '1px solid black' : 'none')};
  background: ${props => props.color};
  font-family: ${families.TitilliumWeb};
`;
