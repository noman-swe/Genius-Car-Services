import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleRegisterForm = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            return `Hi Mr. ${name}, you got a error`;
        }

        createUserWithEmailAndPassword(email, password);

    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className="register-form mx-auto w-50">
            <h3 className='text-center mt-4 color-oranged'>Please Register</h3>

            <form onSubmit={handleRegisterForm} className='form-submit'>
                <div className="form-group w-50 mx-auto">
                    {/* <label>Name</label> */}
                    <input className='d-block w-100 mx-auto' type="text" name="name" id="name" placeholder='Your Name' autoComplete='on' required />
                </div>

                <div className="form-group w-50 mx-auto">
                    {/* <label>Email</label> */}
                    <input className='d-block w-100' type="email" name="email" id="email" placeholder='Your Email' autoComplete='on' required />
                </div>

                <div className="form-group w-50 mx-auto">
                    {/* <label>Password</label> */}
                    <input className='d-block w-100' type="password" name="password" id="password" placeholder='Your Password' autoComplete='on' required />
                </div>

                <div className="form-group w-50 mx-auto
                ">
                    {/* <label>Confirm Password</label> */}
                    <input className='d-block w-100' type="password" name="confirmPassword" id="confirm-password" placeholder='Your Confirm Password' autoComplete='on' required />
                </div>

                <div className="w-50 mx-auto">
                    <input className='' type="checkbox" name="terms" id="terms" />
                    <span className='' htmlFor="terms">Accept Genius Car Terms and Conditions.</span>
                </div>

                <div className="w-50 mx-auto">
                    <input type="submit" className='mt-3 w-100 btn-submit' value="Register" />
                </div>

                <p className='text-center mt-3'>
                    New to Genius Car? <Link to={'/login'} className='text-oranged navigate-register-btn text-decoration-none' onClick={navigateToLogin}>Please Login</Link>
                </p>
            </form>
            <div className="w-50 mx-auto mb-4">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
}

export default Register;