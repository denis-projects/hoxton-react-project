import { Link } from 'react-router-dom';
import '../styles/Header.css'
import React from 'react';

function Header() {
    return (
        <header className='header'>
            <div className='header_logo'>
                <img src='/assets/logo.png' alt="logo" />
            </div>
            <nav className='header_navbar'>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/modules" >Modules</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Apply</Link></li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                </ul>

            </nav>
        </header >
    )
}

export default Header;
