// IMPORT UTILS
import React from 'react';
import { useParams } from "react-router-dom";

// IMPORT COMPONENTS
import { logements }    from '../../asset/logements.js';
import Collapse         from '../../components/common/Collapse/Collapse.js';
import Tag              from '../../components/Tag/Tag.js';
import Rating           from '../../components/Rating/Rating.js';
import SlideShow        from '../../components/SlideShow/SlideShow.js';
import Error            from '../Error/Error.js';

// IMPORT STYLE
import './Housing.css';


// COMPONENT HOUSING
function Housing() {
    let { id } = useParams();
    let detailsLogement = logements.find((logement) => (logement.id === id)); // Récupérer les données du logement à afficher
    
    // Vérifie si le logement est bien trouvé
    if(detailsLogement !== undefined) {

        // Récupérer les images dans un tableau
        let imageSlider = detailsLogement.pictures;

        return (
            <div className="container-housing">
                <SlideShow imageSlider={imageSlider}/>


                {/* CONTAINER INFOS */}
                <div className="container-infos">

                    {/* LEFT INFOS */}
                    <div className="left-details detail-product">
                        <h2>{detailsLogement.title}</h2>
                        <p className='city'>{detailsLogement.location}</p>
                        <div className='tag'>
                        {detailsLogement.tags.map((item) => <Tag key={item} tagTitle={item}></Tag> )}
                        </div>
                    </div>

                    {/* RIGHT INFOS */}
                    <div className="right-details detail-product">
                        <div className="container-owner">
                            <p className='owner-name'>{detailsLogement.host.name}</p>
                            <img className='owner-picture' src={detailsLogement.host.picture} alt={"Logement + " + detailsLogement.title}/>
                        </div>
                        <Rating ratingValue={+detailsLogement.rating} />
                    </div>

                </div>

                <div className="collapse-product">
                    {/* considéré comme children */}
                    <Collapse className="collapse-housing" title={"Description"}>
                            {detailsLogement.description}
                    </Collapse>
                    {/* considéré comme props mais pas dans cette exemple précis (children) */}
                    <Collapse className="collapse-housing" title={"Équipements"} children={detailsLogement.equipments.map((item) => <li key={item}>{item}</li>)}/>
                </div>
            </div>
        );

    } return <Error />
};

export default Housing;


