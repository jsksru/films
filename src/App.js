import React from 'react';
import './App.css';

import Header from './components/header/header';
import Search from './components/search/search';
import FilmsList from './components/films-list/films-list';

const App = () => {
  return (
    <>
      <Header/>
      <Search/>
      <FilmsList/>
    </>
  );
}

export default App;