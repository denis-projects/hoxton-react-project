import React from 'react';
import Form from '../components/Form';
import '../styles/Contact.css'




function Contact() {



    return (
        <div className='contact'>

            <div className='form-content-left'>
                <img className="form-img" src="/assets/formPhoto.jpg" alt="" />
            </div>

            <Form />
        </div>
    )
}

export default Contact;
