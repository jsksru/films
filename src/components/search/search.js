import React from 'react';
import './search.css';

const Search = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search by film title..."/>
    </div>
  );
}

export default Search;