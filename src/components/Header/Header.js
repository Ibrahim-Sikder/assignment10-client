import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/course'>Courses</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Header;