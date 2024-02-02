import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <h2>Main Home</h2>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;