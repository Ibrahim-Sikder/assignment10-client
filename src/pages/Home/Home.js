import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayDetails from '../DisplayDetails/DisplayDetails';
import './Home.css';

const Home = () => {

    const language = useLoaderData();
    console.log(language)

    return (
        <div>
            {/* <h2>this is home : {language.length}</h2> */}
            <div className='home-details'>
                {
                    language.map( lang => <DisplayDetails
                    key={lang.id}
                    lang={lang}
                    ></DisplayDetails>)
                }
            </div>
        </div>
    );
};

export default Home;