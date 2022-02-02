import React from 'react';
import Form from '../components/Form';
import '../styles/Contact.css'
import FormPhoto from '../../assets/formPhoto.jpg'



function Contact() {



    return (
        <div className='contact'>

            <div className='form-content-left' style={{ backgroundImage: `url(${FormPhoto})` }} >
                {/* <img className="form-img" src="/assets/formPhoto.jpg" alt="" /> */}
                <Form />
            </div>


        </div>
    )
}

export default Contact;
