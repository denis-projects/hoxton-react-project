import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ModuleDetails() {

    const [module, setModule] = useState(null)

    const params = useParams()


    useEffect(() => {
        fetch(`http://localhost:3001/modules/${params.id}`)
            .then(resp => resp.json())
            .then(modulesFromServer => setModule(modulesFromServer))

    }, [])

    if (module === null) return <h2>Please wait</h2>

    return <div>
        <section className='module-detail main-wraper'>
            <img src={module.image} alt={module.title} />
            <div className='product-detail__side'>
                <h2>{module.name}</h2>
                <p>{module.description}</p>
                <button>Apply</button>

            </div>
        </section>
    </div>;
}

export default ModuleDetails;
