import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:200,300,400,600', 'Lato:100,300,400,700'],
  },
});

export enum families {
  TitilliumWeb = 'Titillium Web',
  Lato = 'Lato',
}
