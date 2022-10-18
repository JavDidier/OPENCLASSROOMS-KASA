import React from 'react';

import Header from '../../Header/Header.js';
import BannerHome from '../../Banner/BannerHome/BannerHome.js';
import Thumbs from '../../componentsGenerique/Thumbs/Thumbs.js';
import Footer from '../../Footer/Footer.js';

// STYLE
import './Home.css';

function Home() {
    return (
        <div>
            <div className="home-container">
                <Header />
                <BannerHome />
                <Thumbs />
            </div>
            <div className="container-footer">
                <Footer />
            </div> 
        </div>       
    );
};

export default Home;