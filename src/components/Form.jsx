import React, { useState } from 'react';

export default function Form() {

    const initialValues = {
        name: "",
        lastname: "",
        email: "",
        comment: ""
    }

    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })

    }

    const handleSubmit = (e) => {
        e.prevenDefault()

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
                            value={formValues.name}
                            placeholder='Enter your name'
                            onChange={handleChange}
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
                            value={formValues.lastname}
                            placeholder='Enter your last name'
                            onChange={handleChange}
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
                            value={formValues.email}
                            placeholder='Enter your email'
                            onChange={handleChange}
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
                            value={formValues.comment}
                            placeholder='Enter your comment'
                            onChange={handleChange}
                        />
                    </label>
                </div>


                <button className='form-input-btn' type='submit'  >Submit your Application</button>
            </form>
        </>
    )
}
