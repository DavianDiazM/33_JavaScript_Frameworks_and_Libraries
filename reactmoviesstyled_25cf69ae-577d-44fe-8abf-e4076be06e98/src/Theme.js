import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const themes = {
  avengers: {
    bg: '#ceceff',
    color: '#335',
    color2: 'rgba(5, 5, 100, 0.5)',
  },
  terminator: {
    bg: '#ccffcc',
    color: '#010',
    color2: 'rgba(50, 100, 50, 0.5)',
  },
};

export const Theme = (props) => (
  <ThemeProvider theme={themes[props.theme.toLowerCase()]}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
