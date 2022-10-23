// IMPORT UTILS 
import React from 'react';

// IMPORT IMAGE BANNER HOME
import bannerHomeImg from './bannerHome.png';

// IMPORT STYLE
import './BannerHome.css';


// COMPONENT BannerHome
function BannerHome() {
    return (
        <div className="div-bannerHome">
            <div className="div-bannerHome-image">
                <img src={bannerHomeImg} alt="Bannière home Kasa" />
                <div className="bannerHome-overlay"></div>
            </div>
            <div className="div-bannerHome-text">
                <p>Chez vous,<br className='return-line-text-bannerHome'/>partout et ailleurs</p>
            </div>
        </div>
    );
};

export default BannerHome;