import React from 'react';
import { NavLink} from 'react-router-dom';

// STYLE
import './Navigation.css';

function Navigation() {
    return (
        <div className='div-navigation'>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
        </div>
    );
};

export default Navigation;