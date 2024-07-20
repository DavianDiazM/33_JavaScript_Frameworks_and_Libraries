import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: ${(p) => p.theme.bg};
  }
`;
