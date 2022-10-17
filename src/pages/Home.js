import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Thumbs from '../components/Thumbs';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Thumbs />
            <Footer />
        </div>
    );
};

export default Home;