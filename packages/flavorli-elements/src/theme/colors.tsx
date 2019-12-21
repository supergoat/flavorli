import styled from 'styled-components';

export enum COLORS {
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  ERROR = '#B00020',
  GREY_500 = '#EEE',
  GREY_700 = '#6B6B6B',
  BLUE_100 = '#EEFFFF',
  BLUE_200 = '#EEEEFF',
  BLUE_700 = '#273B7A',
  BLUE_900 = '#18285c',
}

export const colors = {
  white: COLORS.WHITE,
  black: COLORS.BLACK,

  primary: COLORS.BLUE_700,
  primaryDark: COLORS.BLUE_900,

  secondary: COLORS.BLUE_100,
  secondaryDark: COLORS.BLUE_200,

  background: COLORS.WHITE,
  surface: COLORS.WHITE,
  secondarySurface: COLORS.GREY_500,

  textColor: COLORS.BLACK,
  secondaryTextColor: COLORS.GREY_700,
  textOnPrimary: COLORS.WHITE,

  error: COLORS.ERROR,
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
  font-family: ${props => props.theme.families.TitilliumWeb};
`;
