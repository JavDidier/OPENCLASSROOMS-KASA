import React from 'react';

import BannerHome from '../../Banner/BannerHome/BannerHome.js';
import Thumbs from '../../componentsGenerique/Thumbs/Thumbs.js';

// STYLE
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <BannerHome />
            <Thumbs />
        </div>     
    );
};

export default Home;