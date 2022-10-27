import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './DisplayDetails.css';

const DisplayDetails = ({ lang }) => {

    console.log(lang)
    const {id, name, details } = lang;
    return (
        <div className='display-details'>
            <div>
                <h2>{name}</h2>
                <p>{details}</p>
                <Button variant="success"><Link to={`/categories/${id}`}>Learn More Courses</Link></Button>
            </div>
        </div>
    );
};

export default DisplayDetails;