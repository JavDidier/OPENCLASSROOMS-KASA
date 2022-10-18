import React from 'react';
import bannerHomeImg from './bannerHome.png';

// STYLE
import './BannerHome.css';

function BannerHome() {
    return (
        <div className="div-bannerHome">
            <div className="div-bannerHome-image">
                <img src={ bannerHomeImg } alt="Bannière home Kasa" />
                <div className="bannerHome-overlay"></div>
            </div>
            <div className="div-bannerHome-text">
                <p>Chez vous, partout et ailleurs</p>
            </div>

        </div>
    );
};

export default BannerHome;