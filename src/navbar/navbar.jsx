import React from 'react'
import logo from '../images/logo.jpg';
import '../navbar/navbar.css';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo1.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    return (
        <>
        <div className='navbar'>
            <main id='image'>
                <img src={logo} alt="#" id='a'/>
            </main>
            <ul className="links">
                <li><Link to='/login' className='link'>Login</Link></li>
                <li><Link to='/signup' className='link'> Sign Up?</Link></li>
            </ul>
        </div>
        <div className="main">
        <h3 id='pin'>Welcome To CineVerse</h3>
        <img src={logo1} alt="#" id='b'/>
        </div>
        </>
    )
}
export default Navbar;
