import {css} from 'styled-components';

export const global = css`
  * {
    box-sizing: border-box;
    font-family: 'Titillium Web';
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
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
