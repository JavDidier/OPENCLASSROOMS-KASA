// IMPORT UTILS
import React from 'react';

// IMPORT COMPONENTS
import BannerHome   from '../../Banner/BannerHome/BannerHome.js';
import Thumbs       from '../../componentsGenerique/Thumbs/Thumbs.js';

// IMPORT STYLE
import './Home.css';


// COMPONENT HOME
function Home() {
    return (
        <div className="home-container">
            <BannerHome />
            <Thumbs />
        </div>     
    );
};

export default Home;