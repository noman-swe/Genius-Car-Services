import React from 'react';
import img404 from '../../../images/error-404-page-not-found.jpg';
const NotFound = () => {
    return (
        <div className='container '>
            <div className="row">
                <img className='mx-auto w-50 img-fluid' src={img404} height={400} alt="" />
            </div>
        </div>
    );
};

export default NotFound;