import React from 'react';

export default function Form() {

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Submitted')
    }


    return (
        <form className='form'
            onSubmit={handleSubmit}
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
    )
}
