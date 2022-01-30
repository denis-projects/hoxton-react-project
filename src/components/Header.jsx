import { Link } from 'react-router-dom';

import React from 'react';
// @ts-ignore
import logo from '../assets/logo.png'

function Header() {
    return (
        <header className='navbar'>
            <div className='leftSide'>
                <img src={logo} alt="logo" />
            </div>
            <nav className='rightSide'>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/modules" >Modules</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact Us</Link></li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                </ul>

            </nav>
        </header >
    )
}

export default Header;
