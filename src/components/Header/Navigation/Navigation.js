import React from 'react';
import { NavLink } from 'react-router-dom';

// STYLE
import './Navigation.css';

function Navigation() {
    return (
        <div className='div-navigation'>
            <NavLink to="/home" className={(nav) => (nav.isActive ? "nav-active" : null)}>
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/about" className={(test) => (test.isActive ? "nav-active" : "")}>
                <li>A Propos</li>
            </NavLink>
        </div>
    );
};

export default Navigation;