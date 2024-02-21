import React, { useRef } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

import googleLogo from '../../images/logos/google-logo.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateToRegister = () => {
        navigate('/register');
    }

    if (user) {
        navigate('/home');
    }

    return (

        <div className="container w-50 mx-auto ">
            <Card className='mt-5 p-3 pb-4 wrapper'>
                <h3 className='text-center  text-oranged'>Please Login </h3>
                <div className='mx-5'>

                    <Form onSubmit={handleFormSubmit}>

                        <Form.Group className="mb-2 w-75 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} className='login-input-form ' type="email" placeholder="Enter email" autoComplete='on' required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-2 w-75 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} className='login-input-form' type="password" placeholder="Password" autoComplete='on' required />
                        </Form.Group>

                        <Form.Group className="mb-2 w-75 mx-auto" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Form.Group className='w-75 mx-auto'>
                            <Button className='btn border-oranged text-oranged w-100' type="submit">
                                Login
                            </Button>
                        </Form.Group>

                    </Form>

                    <p className='text-center mt-2'>New to Genius Car? <Link to={'/register'} className='text-oranged navigate-register-btn text-decoration-none' onClick={navigateToRegister}>Please Register</Link></p>

                    <div className="w-75 mx-auto">
                        <Button className='btn border-oranged text-oranged w-100' type="submit">
                            Continue With <img height={25} src={googleLogo} alt="" />
                        </Button>
                    </div>

                </div>
            </Card>
        </div>
    );
};

export default Login;