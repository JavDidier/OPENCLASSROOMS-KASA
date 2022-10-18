import React from 'react';
import logoFooter from './logoFooter.svg';

// STYLE
import './Footer.css';

function Footer() {

    return (
        <footer>
            <img src={logoFooter} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;