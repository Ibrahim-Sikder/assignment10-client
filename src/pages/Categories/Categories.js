import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LanguageSummeryCard from '../LanguageSummeryCard/LanguageSummeryCard';

const Categories = () => {
    const language = useLoaderData();
    console.log(language)
    return (
        <div>
            <h2>This Is CategoryWise Language : {language.length}</h2>
            <div>
                {
                    language.map(lang => <LanguageSummeryCard 
                    key={lang._id}
                    lang={lang}
                    ></LanguageSummeryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;