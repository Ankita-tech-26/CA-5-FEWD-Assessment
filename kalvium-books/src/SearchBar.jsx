// src/SearchBar.js
import React from 'react';
import './App.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-bar">
    <input 
      type="text" 
      placeholder="Search for books..." 
      value={searchTerm} 
      onChange={e => setSearchTerm(e.target.value)} 
    />
  </div>
);

export default SearchBar;

