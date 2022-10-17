import React from 'react';
import logoHeader from '../images/logoHeader.svg';
import Navigation from './Navigation';

function Header() {
    return (
        <header>
            {/* LOGO */}
            <img src={ logoHeader } alt="Logo Kasa" />

            {/* NAVIGATION */}
            <Navigation />
        </header>
    );
};

export default Header;