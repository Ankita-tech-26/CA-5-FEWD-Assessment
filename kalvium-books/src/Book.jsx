// src/Book.js
import React from 'react';
import './App.css';

const Book = ({ title, authors, imageUrl }) => {
  return (
    <div className="book">
      <img src={imageUrl} alt={title} />
      <div className="book-info">
        <h3>{title}</h3>
        <p>{authors.join(', ')}</p>
      </div>
    </div>
  );
};

export default Book;
