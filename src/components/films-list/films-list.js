import React from 'react';

import FilmCard from '../film-card/film-card';

const FilmsList = () => {
  return (
    <ul className="films">
      <li>
        <FilmCard/>
      </li>
      <li>
        <FilmCard/>
      </li>
      <li>
        <FilmCard/>
      </li>
      <li>
        <FilmCard/>
      </li>
    </ul>
  );
}

export default FilmsList;