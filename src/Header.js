// Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo">
                <h1><Link to="/">Real College Rankings</Link></h1>
            </div>
            <nav className="nav-links">
                <Link to="/difficulty-ranking">Difficulty Ranking</Link>
                <Link to="/ai-ranking">AI-Personalized Ranking</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
