import React from 'react';
import { useParams } from 'react-router-dom';

function ModuleDetails() {
    const params = useParams()
    return <div>
        <h1>Module Details: {params.id}</h1>
    </div>;
}

export default ModuleDetails;
