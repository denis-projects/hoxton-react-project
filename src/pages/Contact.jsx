import React from 'react';
import '../styles/Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <h1>Submit your application</h1>
            <form id='formEl'>
                <input type="text" placeholder='Enter your name' />
                <input type="text" placeholder='Enter your last name' />
                <input type="email" placeholder='Enter your email' />
                <input type="text" placeholder='Enter your birthday' />

                <button>Submit your Application</button>
            </form>
        </div>
    )
}

export default Contact;
