// IMPORT UTILS
import React from 'react';
import { useState } from 'react';

// IMPORT STYLE
import './SlideShow.css';


// COMPONENT SLIDESHOW
function SlideShow( { imageSlider } ) {

    // Hook useState 
    const [ index, setIndex ] = useState(0);

    // Appuyer sur (suivant)
    function nextSlide() { 
        setIndex((oldIndex) => {
            if(index === imageSlider.length-1) {
                oldIndex = 0;
            } else {
                oldIndex = oldIndex + 1; 
            }
            return oldIndex;
        })
    };

    // Appuyer sur (précédent)
    function previousSlide() {
        setIndex((oldIndex) => {
            if(index <= 0) {
                oldIndex = (imageSlider.length-1);
            } else {
                oldIndex = index - 1;
            }
            return oldIndex;
        })
    };

    // Gérer l'affichage en fonction du nombre de photo pour le slideShow
    if (imageSlider.length === 1) {
        return (
            <div className="slider">
                <img src={imageSlider[index]} alt="Logement disponible"/> 
            </div>
        );
    } else {
        return (
            <div className="slider">
                <img src={imageSlider[index]} alt="Logement disponible"/> 
                <button id="previous" onClick={previousSlide}>{"<"}</button>
                <button id="next" onClick={nextSlide}>{">"}</button>
                <span className="countImage">{index + 1 + "/" + (imageSlider.length)}</span>
            </div>
        )
    } 

}

export default SlideShow;