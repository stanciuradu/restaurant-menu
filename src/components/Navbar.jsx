import React from 'react';
import '../components/Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <button type='button'>All</button>
            <button type='button'>Breakfast</button>
            <button type='button'>Lunch</button>
            <button type='button'>Dinner</button>
        </div>
    );
}

export default Navbar;
