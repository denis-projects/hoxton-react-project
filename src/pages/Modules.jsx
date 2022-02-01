import React from 'react';
import { useEffect, useState } from "react"
import ModuleList from '../components/ModuleList';
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
            <ModuleList modules={modules} />
        </div >
    )
}

export default Modules;
