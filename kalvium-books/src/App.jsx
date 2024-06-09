// src/App.js
import React, { useState } from 'react';
import BookList from './BookList';
import RegisterForm from './RegisterForm';
import './App.css';

const App = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          {/* <img src="path/to/logo.png" alt="Kalvium Books Logo" /> */}
          <span>Kalvium Books</span>
        </div>
        <button 
          className="register-button" 
          onClick={() => setShowRegisterForm(!showRegisterForm)}
        >
          Register
        </button>
      </header>
      <div className={showRegisterForm ? 'form-wrapper' : 'container'}>
        {showRegisterForm ? <RegisterForm /> : <BookList />}
      </div>
    </>
  );
};

export default App;




