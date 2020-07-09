import React, { useState } from 'react';
import './search.css';
import api from '../../api/films-api';

const SEARCH_INTERVAL = 2000;

const Search = () => {
  let isSearchStarted = false;
  const [ hasResult, setResult ] = useState(false);
  const [ movieData, setMovieData ] = useState({});

  const renderResultBox = () => {
    return (
      <div className="search__result">
        <div className="search-result__image">
          <img src={movieData.image} alt={movieData.title}/>
        </div>
        <div className="search-result__info">
          <div className="search-result__title">{movieData.title}</div>
          <div className="search-result__tags">
            <div className="search-result__country">{movieData.country}</div>
            <div className="search-result__year">{movieData.year}</div>
            <div className="search-result__director">{movieData.director}</div>
          </div>
        </div>
      </div>
    );
  }

  const inputHandler = (e) => {
    const inputEl = e.target;

    if (!isSearchStarted && inputEl.value !== '' && inputEl.value.length > 1) {
      isSearchStarted = true;
      setTimeout(async() => {
        const response = await api.searchByTitle(inputEl.value);
        if (response.Title && response.Title.length > 0) {
          setMovieData({
            title: response.Title,
            image: response.Poster,
            country: response.Country,
            year: response.Year,
            director: response.Director
          });
          setResult(true);
        } else {
          setResult(false)
        }
        isSearchStarted = false;
      }, SEARCH_INTERVAL);
    } else {
      setResult(false);
    }
    
  }

  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search by film title..." onChange={inputHandler}/>
      {hasResult ? renderResultBox(): null}
    </div>
  );
}

export default Search;