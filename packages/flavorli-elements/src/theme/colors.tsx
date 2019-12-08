import styled from 'styled-components';

export enum COLORS {
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  ERROR = '#B00020',
  GREY_700 = '#6B6B6B',
  BLUE_700 = '#273B7A',
  BLUE_900 = '#18285c',
}

export enum colors {
  WHITE = COLORS.WHITE,
  BLACK = COLORS.BLACK,

  PRIMARY = COLORS.BLUE_700,
  PRIMARY_DARK = COLORS.BLUE_900,

  BACKGROUND = COLORS.WHITE,

  SURFACE = COLORS.WHITE,

  TEXT_COLOR = COLORS.BLACK,
  SECONDARY_TEXT_COLOR = COLORS.GREY_700,
  TEXT_ON_PRIMARY = COLORS.WHITE,
  ERROR = COLORS.ERROR,
}

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
