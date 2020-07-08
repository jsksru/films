import React, { useState, useEffect } from 'react';
import api from '../../api/films-api';

const FilmCard = () => {
  const [ isLoaded, setLoaded ] = useState(false);
  const [ filmData, setFilmData ] = useState({});

  useEffect(() => {
    api.getById('tt3896198')
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
        <img src={filmData.image} alt={filmData.title}/>
        <h2>{filmData.title}</h2>
        <p>{filmData.text}</p>
        <ul>
          <li>Country: {filmData.country}</li>
          <li>Year: {filmData.year}</li>
          <li>IMDB Rating: {filmData.rating}</li>
          <li>Genre: {filmData.genre}</li>
          <li>Director: {filmData.director}</li>
          <li>Actors: {filmData.actors}</li>
        </ul>
      </div>
    );
  };

  return isLoaded ? film(): loader();
}

export default FilmCard;