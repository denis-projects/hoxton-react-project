import React from 'react';

function Contact() {
    return (
        <>
            <h1>Submit your application</h1>
            <form>
                <input type="text" placeholder='Enter your name' />
                <input type="text" placeholder='Enter your last name' />
                <input type="email" placeholder='Enter your email' />
                <input type="text" placeholder='Enter your birthday' />

                <button>Submit your Application</button>
            </form>
        </>
    )
}

export default Contact;
