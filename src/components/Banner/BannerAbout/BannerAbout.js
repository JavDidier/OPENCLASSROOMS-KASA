import React from 'react';
import bannerAboutImg from './bannerAbout.png';

// STYLE
import './BannerAbout.css';

function BannerHome() {
    return (
        <div className="div-bannerAbout">
            <div className="div-bannerAbout-image">
                <img src={ bannerAboutImg } alt="Bannière à propos Kasa" />
            </div>
            <div className="bannerAbout-overlay"></div>
        </div>
    );
};

export default BannerHome;