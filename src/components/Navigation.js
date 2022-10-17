import React from 'react';
import { NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <div className='div-navigation'>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;