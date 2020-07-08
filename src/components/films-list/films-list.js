import React from 'react';
import './films-list.css';

import FilmCard from '../film-card/film-card';

const FilmsList = () => {
  return (
    <ul className="films">
      <li>
        <FilmCard id="tt0105690"/>
      </li>
      <li>
        <FilmCard id="tt0114781"/>
      </li>
      <li>
        <FilmCard id="tt0099785"/>
      </li>
      <li>
        <FilmCard id="tt0104431"/>
      </li>
      <li>
        <FilmCard id="tt0088247"/>
      </li>
      <li>
        <FilmCard id="tt0103064"/>
      </li>
      <li>
        <FilmCard id="tt0088763"/>
      </li>
      <li>
        <FilmCard id="tt0096874"/>
      </li>
      <li>
        <FilmCard id="tt0099088"/>
      </li>
      <li>
        <FilmCard id="tt0109830"/>
      </li>
      <li>
        <FilmCard id="tt0111161"/>
      </li>
      <li>
        <FilmCard id="tt0110357"/>
      </li>
    </ul>
  );
}

export default FilmsList;