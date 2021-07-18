import React from 'react';
import '../components/Header.css';
import Logo from '../assets/images/logo.png'
function Header() {
    return (
        <div className='header'>
            <h1>Our Menu</h1>
            <img src={Logo} alt="" />
        </div>
    );
}

export default Header;
