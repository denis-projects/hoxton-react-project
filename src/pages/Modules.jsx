import React from 'react';
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import MolduleItem from '../components/MolduleItem';
import '../styles/Modules.css'

function Modules() {

    const [modules, setModules] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/modules')
            .then(resp => resp.json())
            .then(modulesFromServer => setModules(modulesFromServer))
    }, [])

    return (
        <div className='modules'>
            <h1 className='modulesTitle'>The Modules</h1>
            <ul className='modulesList'>
                {modules.map(module => (
                    <li>
                        {/* <Link to=`/modules/${module.id}`> */}
                        <MolduleItem
                            key={module.id}
                            image={module.image}
                            name={module.name}
                            weekDuration={module.weekDuration}
                        />

                        {/* </Link> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Modules;
