import React from 'react';
import bannerAboutImg from './bannerAbout.png';

function BannerHome() {
    return (
        <div className="div-bannerAbout">
            <div className="div-bannerAbout-image">
                <img src={ bannerAboutImg } alt="Bannière à propos Kasa" />
            </div>
        </div>
    );
};

export default BannerHome;