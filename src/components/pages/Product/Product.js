import React from 'react';
import { useParams } from "react-router-dom";

import { logements } from '../../../assets/data/logements.js';
import Collapse from '../../Collapse/Collapse.js';
import Tag from '../../componentsGenerique/Tag/Tag.js';
import Rating from '../../Rating/Rating.js';
import SlideShow from '../../SlideShow/SlideShow.js';


import Error from '../Error/Error.js';

// STYLE
import './Product.css';


function Product() {
    let { id } = useParams();
    let detailsLogement = logements.find((logement) => (logement.id === id)); // Récupérer les données du logement à afficher
    
    // Vérifie si le logement est bien trouvé
    if(detailsLogement !== undefined) {

        // Récupérer les images dans un tableau
        let imageSlider = detailsLogement.pictures;

        console.log(+detailsLogement.rating);
        return (
            <div className="product-container">
                <SlideShow imageSlider={imageSlider}/>


                {/* CONTAINER INFOS */}
                <div className="container-infos">

                    {/* LEFT INFOS */}
                    <div className="left-details detail-product">
                        <h2>{detailsLogement.title}</h2>
                        <p className='city'>{detailsLogement.location}</p>
                        <div className='tag'>
                        {detailsLogement.tags.map((item) => <Tag key={item} props={item}></Tag> )}
                        </div>
                    </div>

                    {/* RIGHT INFOS */}
                    <div className="details-host">
                        <div className="container-owner">
                            <p className='owner-name'>{detailsLogement.host.name}</p>
                            <img className='owner-picture' src={detailsLogement.host.picture} alt={"Logement + " + detailsLogement.title}/>
                        </div>
                        <Rating ratingValue={+detailsLogement.rating} />
                    </div>

                </div>

                <div className="collapse-product">
                    <Collapse className="test" textBtn={"Description"} children={detailsLogement.description}/>
                    <Collapse className="test" textBtn={"Équipements"} children={detailsLogement.equipments.map((item) => <li key={item}>{item}</li>)}/>
                </div>
            </div>
        );

    } return <Error />
};

export default Product;


