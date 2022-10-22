// IMPORT UTILS
import React from 'react';

// IMPORT COMPONENTS
import { logements } from '../../../assets/data/logements.js';

// IMPORT STYLE
import './Thumbs.css';


// COMPONENT THUMBS
function Thumbs() {
    return (
        <div className="div-thumbs">

            {logements.map((logement, index) => (
                <a className="thumb" href={"/housing/" + logement.id} key={`${logement}-${index}`}>
                    <span className="thumb-img">
                        <img src={logement.cover} alt={"Logement disponible" + logement.title}/>
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