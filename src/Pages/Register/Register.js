import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import googleLogo from '../../images/logos/google-logo.png';

import './Register.css';

const Register = () => {

    const navigate = useNavigate();

    const handleFormSubmit = event => {
        event.preventDefault();

    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div className="register-form mx-auto w-50">
            <h3 className='text-center mt-4 color-oranged'>Please Register</h3>

            <form onSubmit={handleFormSubmit} className='form-submit'>
                <div className="form-group w-50 mx-auto">
                    <label>Name</label>
                    <input className='d-block w-100 mx-auto' type="text" name="name" id="name" placeholder='Your Name' autoComplete='on' required />
                </div>

                <div className="form-group w-50 mx-auto">
                    <label>Email</label>
                    <input className='d-block w-100' type="email" name="email" id="email" placeholder='Your Email' autoComplete='on' required />
                </div>

                <div className="form-group w-50 mx-auto">
                    <label>Password</label>
                    <input className='d-block w-100' type="password" name="password" id="password" placeholder='Your Password' autoComplete='on' required />
                </div>

                <div className="form-group w-50 mx-auto">
                    <label>Confirm Password</label>
                    <input className='d-block w-100' type="password" name="confirm-password" id="confirm-password" placeholder='Your Confirm Password' autoComplete='on' required />
                </div>

                <div className="w-50 mx-auto">
                    <input type="submit" className='mt-3 w-100 btn-submit' value="Register" />
                </div>

                <p className='text-center mt-3'>
                    New to Genius Car? <Link to={'/login'} className='text-oranged navigate-register-btn text-decoration-none' onClick={navigateToLogin}>Please Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;