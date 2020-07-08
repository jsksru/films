import React, { useState, useEffect } from 'react';
import './film-card.css';

import api from '../../api/films-api';

const FilmCard = (props) => {
  const filmId = props.id || 'tt3896198';
  const [ isLoaded, setLoaded ] = useState(false);
  const [ filmData, setFilmData ] = useState({});

  useEffect(() => {
    api.getById(filmId)
      .then(data => {
        setLoaded(true);
        setFilmData({
          title: data.Title,
          text: data.Plot,
          image: data.Poster,
          country: data.Country,
          year: parseInt(data.Year),
          rating: parseFloat(data.imdbRating),
          genre: data.Genre,
          director: data.Director,
          actors: data.Actors,
        });
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  const loader = () => {
    return (
      <div className="loader">
        Loading...
      </div>
    );
  };

  const film = () => {
    return (
      <div className="film">
        <div className="film__rating">{filmData.rating}</div>
        <img className="film__image" src={filmData.image} alt={filmData.title}/>
        <div className="film__info">
          <div>{filmData.country}</div>
          <div>{filmData.year}</div>
        </div>
        <h2 className="film__title">{filmData.title}</h2>
      </div>
    );
  };

  return isLoaded ? film(): loader();
}

export default FilmCard;