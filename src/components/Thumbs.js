import React from 'react';
import { logements } from '../data/logements.js';

function Thumbs() {

    return (
        <div className="div-thumbs">

            {logements.map((logement, index) => (
                <a className="thumb" href={"/product/" + logement.id} key={`${logement}-${index}`}>
                    <span className="thumb-img">
                        <img src={logement.cover} alt="" />
                    </span>
                    <span className="thumb-title">
                        { logement.title }
                    </span>
                </a>
            ))}

        </div>
    )
}
    
export default Thumbs;