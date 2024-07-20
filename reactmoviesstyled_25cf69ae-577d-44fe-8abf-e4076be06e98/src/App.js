import React from 'react';
import { Theme } from './Theme';
import { Title } from './Title';
import Form from './Form';

const movies = [
  {
    name: 'Avengers',
    available: 5,
  },
  {
    name: 'Terminator',
    available: 3,
  },
];

export default function App() {
  const [theme, setTheme] = React.useState('avengers');

  return (
    <Theme theme={theme}>
      <Title>Películas</Title>
      {movies.map((movie) => (
        <Form movie={movie} updateTheme={() => setTheme(movie.name)} />
      ))}
    </Theme>
  );
}
