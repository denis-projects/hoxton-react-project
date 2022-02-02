import React from 'react';

export default function Form() {

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Submitted')
    }


    return (
        <>

            <form className='form'
                onSubmit={handleSubmit}
            >

                <div className='form-inputs'>
                    <label className='form-label'>
                        Name
                        <input
                            id='name'
                            type="text"
                            name='name'
                            placeholder='Enter your name' />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                        Last name
                        <input
                            id='lastname'
                            type="text"
                            name='lastname'
                            placeholder='Enter your last name' />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                        Email
                        <input
                            id='email'
                            type="email"
                            name='email'
                            placeholder='Enter your email' />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                        Add a comment
                        <input
                            id='comment'
                            type="text"
                            name='comment'
                            placeholder='Enter your comment' />
                    </label>
                </div>


                <button className='form-input-btn' type='submit'  >Submit your Application</button>
            </form>
        </>
    )
}
