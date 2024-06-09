// src/RegisterForm.js
import React, { useState } from 'react';
import './App.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (name.length < 3 || name.length > 30) newErrors.name = 'Name must be between 3 and 30 characters';
    if (!email.includes('@')) newErrors.email = 'Email must be valid';
    if (password.length < 10 || !/[!@#$%^&*]/.test(password)) newErrors.password = 'Password must be at least 10 characters long and include a special character';
    if (password !== repeatPassword) newErrors.repeatPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = { name, email, password };
      alert('Form Data: ' + JSON.stringify(formData));

      // Optionally, save to local storage
      localStorage.setItem('registerFormData', JSON.stringify(formData));

      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input 
            id="repeatPassword" 
            type="password" 
            value={repeatPassword} 
            onChange={e => setRepeatPassword(e.target.value)} 
          />
          {errors.repeatPassword && <p>{errors.repeatPassword}</p>}
        </div>
        <button type="submit" disabled={!name || !email || !password || !repeatPassword}>Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;


