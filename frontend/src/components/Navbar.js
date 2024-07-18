// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // const handleSearch = () => {
    //     navigate(`/search?q=${searchQuery}`);
    // };

    return (
        <nav>
            <ul>
                <div className='heading-nav'>NEXT APP</div>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            {/* <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button> */}
        </nav>
    );
};

export default Navbar;
