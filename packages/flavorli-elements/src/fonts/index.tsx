import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'Lato:300,400,700'],
  },
});

export enum families {
  TitilliumWeb = 'Titillium Web',
  Lato = 'Lato',
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
