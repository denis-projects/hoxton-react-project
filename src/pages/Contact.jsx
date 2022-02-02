import React from 'react';
import '../styles/Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <h1>Apply down bealow to take the Logic test today</h1>
            <form id='formEl'
                onSubmit={function (event) {
                    event.preventDefault()
                }}
            >
                <label htmlFor="">
                    Name
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter your name' />
                </label>
                <label htmlFor="">
                    Last name
                    <input
                        type="text"
                        name='lastname'
                        placeholder='Enter your last name' />
                </label>
                <label htmlFor="">
                    Email
                    <input
                        type="email"
                        name='email'
                        placeholder='Enter your email' />
                </label>
                <label htmlFor="">
                    Add a comment
                    <input
                        type="text"
                        name='comment'
                        placeholder='Enter your email' />
                </label>

                <button type='submit' >Submit your Application</button>
            </form>
        </div>
    )
}

export default Contact;
