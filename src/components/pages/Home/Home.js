import React from 'react';

import Header from '../../Header/Header.js';
import BannerHome from '../../Banner/BannerHome/BannerHome.js';
import Thumbs from '../../componentsGenerique/Thumbs/Thumbs.js';
import Footer from '../../Footer/Footer.js';

import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <Header />
            <BannerHome />
            <Thumbs />
            <Footer />
        </div>
    );
};

export default Home;