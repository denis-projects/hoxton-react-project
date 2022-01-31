import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import Linkedin from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon />
                <FacebookIcon />
                <Linkedin />
            </div>
            <p> &copy; 2022 hoxtonacademy.com</p>

        </div>
    )
}

export default Footer;
