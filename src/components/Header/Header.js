import React from 'react';

import Navigation from './Navigation/Navigation.js';
import LogoHeader from './Logo/LogoHeader.js';

// STYLE
import './Header.css';

const Header = () => {
    return (
        <header>
            <LogoHeader />
            <Navigation />
        </header>
    );
};

export default Header;