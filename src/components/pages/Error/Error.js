import React from 'react';

import { NavLink } from 'react-router-dom';

//STYLE
import './Error.css';

function Error() {
    return (
        <div className='div-error'>
            <div className="about-container">
            </div>
            <h1 className='title-erreur'>404</h1>
            <p className='text-erreur'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/home" className="linkHome">
                <li>Retourner sur la page d'accueil</li>
            </NavLink>
        </div>
    );
};

export default Error;