import React from 'react';
import MolduleItem from './MolduleItem';

function ModuleList() {
    return (
        <ul className='modulesList'>
            {modules.map(module => (
                <MolduleItem key={module.id} module={module} />
            ))}
        </ul>

    )
}

export default ModuleList;
