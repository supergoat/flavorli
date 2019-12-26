const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',

  PINK_500: '#EA7597',
  ORANGE_500: '#FF7744',
  RED_500: '#EE4444',
  RED_700: '#B00020',
  GREY_500: '#EEE',
  GREY_700: '#6B6B6B',
  BLUE_100: '#EEFFFF',
  BLUE_200: '#EEEEFF',
  BLUE_700: '#273B7A',
  BLUE_900: '#18285c',

  GREEN_500: '#4B8B4B',
};

export type IColor = keyof typeof colors;

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

  tagOrange: COLORS.ORANGE_500,
  tagPink: COLORS.PINK_500,
  tagRed: COLORS.RED_500,
  tagGreen: COLORS.GREEN_500,

  error: COLORS.RED_700,
};
