import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, price, img } = service;
    return (
        <div className='service'>
            <div className="service-wrapper">

                <img src={img} alt="" />
                <div className="service-info">
                    <h2>{name}</h2>
                    <p>{description && description.slice(0, 100) + '...'}</p>
                    <p>Price: ${price}</p>
                </div>
            </div>
            <button className='btn-book-service'>Book {name}</button>

        </div>
    );
};

export default Service;