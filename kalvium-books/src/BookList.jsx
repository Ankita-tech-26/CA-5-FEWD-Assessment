// src/BookList.js
import React, { useState, useEffect } from 'react';
import Book from './Book';
import SearchBar from './SearchBar';
import './App.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch('https://reactnd-books-api.udacity.com/books', {
        headers: { 'Authorization': 'whatever-you-want' }
      });
      const data = await res.json();
      setBooks(data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="book-list">
        {filteredBooks.map(book => (
          <Book 
            key={book.id} 
            title={book.title} 
            authors={book.authors} 
            imageUrl={book.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193?text=No+Image'} 
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;


