import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'
// @ts-ignore
import MainImage from '../assets/hoxton_class.jpg'

function Homepage() {
    return (
        <div className='home' style={{ backgroundImage: `url(${MainImage})` }} >
            <div className='headerContainer'  >
                <h1>Next generation of Software Engineers</h1>
                {/* <p>The best place for a life changing experience</p> */}
                <Link to="/contact">
                    <button> APPLY NOW </button>
                </Link>

            </div>
        </div >
    )
}

export default Homepage;
