import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'
// @ts-ignore
import MainImage from '../../Public/assets/hoxton_class.jpg'

function Homepage() {
    return (
        <div className='home' style={{ backgroundImage: `url(${MainImage})` }} >
            <div className='headerContainer'  >
                <Link to="/contact">
                    <h1>Be part of next generation of Software Engineers</h1>
                </Link>

            </div>
        </div >
    )
}

export default Homepage;
