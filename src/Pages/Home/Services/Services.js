import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='services-container'>
            <h3>Our Services</h3>
            <div className="services">
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;