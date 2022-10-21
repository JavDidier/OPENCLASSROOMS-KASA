import React from 'react';
import { useState } from 'react';

// STYLE
import './SlideShow.css';

function SlideShow( { imageSlider } ) {

    // Hook useState 
    const [ index, setIndex ] = useState(0);
    console.log(index);

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

    function previousSlide() {
        setIndex((oldIndex) => {
            console.log("oldIndex :" + oldIndex);
            console.log("index : " + index);

            if(index <= 0) {
                oldIndex = (imageSlider.length-1);
            } else {
                oldIndex = index - 1;
                console.log("passe dans la boucle"); 
            }
            return oldIndex;
        })
    };

    return (

        <div className="slider">
            <img src={imageSlider[index]} alt=""/> 
            <button id="precedent" onClick={previousSlide}>{"<"}</button>
            <button id="suivant" onClick={nextSlide}>{">"}</button>
            <span className="countImage">{index + 1 + "/" + (imageSlider.length)}</span>
        </div>
    );
}

export default SlideShow;