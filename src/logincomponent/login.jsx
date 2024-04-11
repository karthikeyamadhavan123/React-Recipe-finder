import React, { useState } from 'react';
import '../logincomponent/login.css'; // Import CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleForm = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(data.email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    if (data.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      // Here you can perform login logic
      // For demonstration purposes, I'm redirecting to the main page
      console.log('Login clicked');
      localStorage.setItem('dattostore',JSON.stringify(data));
      console.log('Data stored in local storage:', data); // Log the data to console
      navigate('/Recipes'); // Redirect to main page after successful login
    }
  };

  return (
    <>
      <div className="mai">
        <div className="login-container">
          <h2 id="insta">CineVerse</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <span id="verify">{emailError}</span>
            <input
              type="text"
              placeholder="Phone number or Username or Email"
              value={data.email}
              onChange={handleForm}
              onBlur={validateEmail}
              required
              name='email'
            />

            <span id="verif">{passwordError}</span>
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={handleForm}
              onBlur={validatePassword}
              required
              name='password'
            />

            <button type="submit" onClick={handleLogin}>Log in</button>
          </form>
        </div>
        <div className="account">
          <h4 id='or'>OR</h4>
        </div>
        <div className="fb-icon">
          <FontAwesomeIcon icon={faFacebook} />
          <span id="log">Log in with Facebook</span>
        </div>
        <div className="fb">
          <Link to='/forgotpassword' className='forgo'>Forgot password?</Link>
        </div>
        <div className="dont">
          <span id="have">Don't have an account?</span>
          <Link to='/signup' className='sign'>Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
