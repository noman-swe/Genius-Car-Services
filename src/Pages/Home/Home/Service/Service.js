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
                <button>Book {name}</button>
            </div>

        </div>
    );
};

export default Service;