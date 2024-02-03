import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import './Home.css';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            {/* this empty <></> is called fregment */}
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;