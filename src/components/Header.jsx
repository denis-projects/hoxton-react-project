// @ts-nocheck
import React from 'react';
import logo from '../assets/logo.png'

function Header() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={logo} alt="logo" />
            </div>
            <div className='rightSide'></div>
        </div>
    )
}

export default Header;
