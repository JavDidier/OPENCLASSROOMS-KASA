import React from 'react';
import bannerImg from '../images/banner.png';

function Banner() {
    return (
        <div className="div-banner">
            <div className="div-banner-image">
                <img src={ bannerImg } alt="Bannière Kasa" />
            </div>
            <div className="div-banner-text">
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
        </div>
    );
};

export default Banner;