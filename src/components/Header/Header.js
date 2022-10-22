import React from 'react';

// IMPORT COMPONENTS
import Navigation from './Navigation/Navigation.js';
import LogoHeader from './Logo/LogoHeader.js';

// STYLE
import './Header.css';


// Function header
function Header() {
    return (
        <header>
            <LogoHeader />
            <Navigation />
        </header>
    );
};

export default Header;