import React from 'react';
import './search.css';
import api from '../../api/films-api';

const SEARCH_INTERVAL = 2000;

const Search = () => {
  let isSearchStarted = false;

  const inputHandler = (e) => {
    const inputEl = e.target;

    if (!isSearchStarted && inputEl.value !== '' && inputEl.value.length > 1) {
      isSearchStarted = true;
      setTimeout(async() => {
        const response = await api.searchByTitle(inputEl.value);
        console.log(response);
        isSearchStarted = false;
      }, SEARCH_INTERVAL);
    }
    
  }

  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search by film title..." onChange={inputHandler}/>
    </div>
  );
}

export default Search;