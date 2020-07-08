import React from 'react';

const FilmCard = () => {
  return (
    <div className="film">
      <img src="https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="Home Alone"/>
      <h2>Home Alone</h2>
      <p>An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.</p>
      <ul>
        <li>Country: USA</li>
        <li>Year: 1990</li>
        <li>IMDB Rating: 7.6</li>
        <li>Genre: Comedy, Family</li>
        <li>Director: Chris Columbus</li>
        <li>Actors: Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard</li>
      </ul>
    </div>
  );
}

export default FilmCard;