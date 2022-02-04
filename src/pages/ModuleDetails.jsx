// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ModuleDetail.css'

function ModuleDetails() {

    const [module, setModule] = useState(null)
    const params = useParams()


    useEffect(() => {
        fetch(`http://localhost:3001/modules/${params.id}`)
            .then(resp => resp.json())
            .then(modulesFromServer => setModule(modulesFromServer))

    }, [])

    if (module === null) return <h2>Please wait</h2>


    function createComment(content, moduleId) {
        fetch('http://localhost:3001/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ content, moduleId })
        }).then(resp => resp.json())
            .then(newComment => {
                const modulesCopy = JSON.parse(JSON.stringify(module))
                const moduleToChange = modulesCopy.find(module => module.id === moduleId)
                moduleToChange.reviews.push(newComment)
                setModule(modulesCopy)
            })

    }


    return (
        <div className='moduleDetail'>
            <section className='module-detail-main-wraper'>
                <div className='module-details-image'>
                    <img src={module.image} alt={module.title} />
                </div>

                <div className='product-detail__side'>
                    <div className='detailDescription'>
                        <h2>{module.name}</h2>
                        <p>{module.description}</p>

                    </div>
                </div>
                <div>
                    <div className='comment-wrapper'>
                        <h2 className='h2Comments'>Comments</h2>
                        <ul className='comments'>
                            {module.reviews.map(review => (
                                <li>{review.content}</li>
                            ))}
                        </ul>
                    </div>
                    <form
                        className='detailsForm'
                        onSubmit={function (event) {
                            event.preventDefault()
                            const content = event.target.comment.value
                            createComment(content, module.Id)
                            event.target.reset()
                        }}
                    >
                        <input
                            type="text"
                            name='comment'
                            placeholder='Write your comment'
                        />
                        <button className='detailsButton'>Post</button>
                    </form>

                </div>
            </section>
        </div>

    )
}

export default ModuleDetails;
