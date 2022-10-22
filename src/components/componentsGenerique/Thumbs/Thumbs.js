import React from 'react';
import { logements } from '../../../assets/data/logements.js';

// STYLE
import './Thumbs.css';

function Thumbs() {

    return (
        <div className="div-thumbs">

            {logements.map((logement, index) => (
                <a className="thumb" href={"/housing/" + logement.id} key={`${logement}-${index}`}>
                    <span className="thumb-img">
                        <img src={logement.cover} alt="" />
                    </span>
                    <span className="thumb-title">
                        { logement.title }
                    </span>
                    <div className="thumb-overlay"></div>
                </a>
            ))}

        </div>
    )
}
    
export default Thumbs;