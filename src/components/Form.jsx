// @ts-nocheck
import React, { useState } from 'react';
import "../styles/Contact.css"

export default function Form() {


    function createUser(name, lastname, email, comment) {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ name, lastname, email, comment })
        }).then(resp => resp.json())
    }



    return (
        <>

            <form className='form'
                onSubmit={function (event) {
                    event.preventDefault()
                    const name = event.target.name.value
                    const lastname = event.target.lastname.value
                    const email = event.target.email.value
                    const comment = event.target.comment.value

                    createUser(name, lastname, email, comment)
                    event.target.reset()
                }}
            >

                <div className='form-inputs'>
                    <label className='form-label'>
                        Name
                        <input
                            id='name'
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                            required
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                        Last name
                        <input
                            id='lastname'
                            type="text"
                            name='lastname'
                            // value={formValues.lastname}
                            placeholder='Enter your last name'
                            // onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                        Email
                        <input
                            id='email'
                            type="email"
                            name='email'
                            placeholder='Enter your email'
                            required
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                        Add a comment
                        <input
                            id='comment'
                            type="text"
                            name='comment'
                            placeholder='Enter your comment'
                        />
                    </label>
                </div>


                <button className='form-input-btn' type='submit'  >Submit your Application</button>
            </form>
        </>
    )
}
