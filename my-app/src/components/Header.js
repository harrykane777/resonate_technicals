import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <a href="#home">Contacts</a>
                </div>
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
