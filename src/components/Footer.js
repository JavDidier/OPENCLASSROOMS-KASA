import React from 'react';
import logoFooter from '../images/logoFooter.svg';

const Footer = () => {

    return (
        <footer>
            <img src={logoFooter} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;