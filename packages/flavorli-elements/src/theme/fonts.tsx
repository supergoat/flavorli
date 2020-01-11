import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Titillium Web:300,400,700',
      'Lato:300,400,700',
      'Pacifico',
      'Patrick Hand',
    ],
  },
});

export enum families {
  TitilliumWeb = 'Titillium Web',
  Lato = 'Lato',
  PatrickHand = 'Patrick Hand',
  Pacifico = 'Pacifico',
}

export const weights = {
  TitilliumWeb: {
    LIGHT: 300,
    REGULAR: 400,
    BOLD: 700,
  },
  Lato: {
    LIGHT: 300,
    REGULAR: 400,
    BOLD: 700,
  },
};

export const fontSizes = {
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  24: '24px',
  32: '32px',
  48: '48px',
  64: '64px',
};
