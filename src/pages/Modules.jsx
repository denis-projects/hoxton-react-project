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

                    <MolduleItem module={module} />

                ))}
            </ul>
        </div >
    )
}

export default Modules;
