import {css} from 'styled-components';
import {families} from '../theme/fonts';

export const global = css`
  * {
    box-sizing: border-box;
    font-family: ${families.Muli};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button,
  input,
  textarea,
  select {
    font-family: ${families.Muli};
  }
`;
