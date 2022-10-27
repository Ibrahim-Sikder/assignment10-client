import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Programming = () => {
    const programming = useLoaderData();
    console.log(programming)
    return (
        <div>
            <h2>this is programming</h2>
        </div>
    );
};

export default Programming;