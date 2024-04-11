import React, { useState } from 'react'
import '../signupcomponent/sign.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {useNavigate} from 'react-router-dom'
const Sign = () => {
  const navigate1=useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [signdata,setsigndata]=useState({
    email:'',
    password:'',
    username:'',
    fullname:''
  })
  const handlechange1=(e)=>{
const{name,value}=e.target;
setsigndata({
  ...signdata,
  [name]:value
})

  }
  const handleLogin1=(e)=>{
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      // Here you can perform login logic
      // For demonstration purposes, I'm redirecting to the main page
      console.log('Login clicked'); // Log the data to console
      localStorage.setItem('store',JSON.stringify(signdata));
      const storedData = JSON.parse(localStorage.getItem('store'));
      console.log(storedData);
      navigate1('/login'); // Redirect to main page after successful login
    }

    }
    
    const validateEmail = () => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(signdata.email)) {
        setEmailError('Invalid email format');
        return false;
      }
      setEmailError('');
      return true;
    };
  
    const validatePassword = () => {
      if (signdata.password.length < 8) {
        setPasswordError('Password must be at least 8 characters long');
        return false;
      }
      setPasswordError('');
      return true;
    }
  return (
    <div>
      <h1>CineVerse</h1>
      <h2>Sign up to see Movies and videos from your friends.</h2>
      <button> <FontAwesomeIcon icon={faFacebook}/> Log in with Facebook</button>
      <div>
        OR
      </div>
      <form>
      <span id="verify">{emailError}</span>
        <input type="text" placeholder="Mobile Number or Email" name='email' value={signdata.email} onChange={handlechange1} className='email'/>
        <input type="text" placeholder="Full Name"  name='fullname' value={signdata.fullname}  onChange={handlechange1} className='pass'/>
        <input type="text" placeholder="Username" name='username' value={signdata.username} onChange={handlechange1} className='User'/>
        <span id="verif">{passwordError}</span>
        <input type="password" placeholder="Password"  name='password' value={signdata.password} onChange={handlechange1} className='ooo'/>
        <p>People who use our service may have uploaded your contact information to Instagram. <Link to="/" className='hel'>Learn More</Link></p>
        <p>By signing up, you agree to our <Link to="/" className='hel'>Terms</Link>, <Link to="/" className='hel'>Privacy Policy</Link> and <Link to="/" className='hel'>Cookies Policy</Link>.</p>
        <button type="submit" onClick={handleLogin1}>Sign up</button>
      </form>
      <p>Have an account? <Link to="/login" className='hel'>Log in</Link></p>
    </div>
  );
};

export default Sign;
