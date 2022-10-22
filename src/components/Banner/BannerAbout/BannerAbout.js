// IMPORT UTILS
import React from 'react';

// IMPORT IMAGE BANNER ABOUT
import bannerAboutImg from './bannerAbout.png';

// IMPORT STYLE
import './BannerAbout.css';

// COMPONENT BannerHome
function BannerHome() {
    return (
        <div className="div-bannerAbout">
            <div className="div-bannerAbout-image">
                <img src={bannerAboutImg} alt="Bannière à propos Kasa" />
            </div>
            <div className="bannerAbout-overlay"></div>
        </div>
    );
};

export default BannerHome;