// IMPORT UTILS
import React from 'react';

// IMPORT COMPONENTS
import Navigation from './Navigation/Navigation.js';
import LogoHeader from './LogoHeader/LogoHeader.js';

// IMPORT STYLE
import './Header.css';


function Header() {
    return (
        <header>
            <LogoHeader />
            <Navigation />
        </header>
    );
};

export default Header;