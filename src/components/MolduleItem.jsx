import React from 'react';

function MolduleItem(props) {
    return (
        <div className='modulesItem'>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.weekDuration}</p>
        </div>
    )
}

export default MolduleItem;
