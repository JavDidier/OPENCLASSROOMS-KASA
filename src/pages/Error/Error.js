// IMPORT UTILS
import React from 'react';
import { NavLink } from 'react-router-dom'; // pour utiliser les NavLink

// IMPORT STYLE
import './Error.css';


// COMPONENT ERROR
function Error() {
    return (
        <div className='container-error'>
            <h1 className='title-error'>404</h1>
            <p className='text-error'>Oups! La page que <br className='return-line-text-error'/> vous demandez n'existe pas.</p>
            <NavLink to="/home" className="linkErrorToHome">Retourner sur la page d'accueil</NavLink>
        </div>
    );
};

export default Error;