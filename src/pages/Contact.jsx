import React from 'react';
import Form from '../components/Form';
import '../styles/Contact.css'
import image from '../../assets/formPhoto.jpg'



function Contact() {



    return (
        <div className='contact'>

            <div className='form-content-left'>
                <img className="form-img" src={image} alt="" />
            </div>

            <Form />
        </div>
    )
}

export default Contact;
