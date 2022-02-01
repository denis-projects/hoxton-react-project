import React from 'react';
import { Link } from 'react-router-dom'

function MolduleItem({ module }) {
    return (
        <li>
            <Link to={`/modules/${module.id}`}>
                <div className='modulesItem'>
                    <img src={module.image} alt={module.name} />
                    <h3>{module.name}</h3>
                    <p>{module.weekDuration}</p>
                </div>
            </Link>
        </li>
    )
}

export default MolduleItem;
