import React, { useEffect, useRef } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const [sendPasswordResetEmail, sending, errorPassReset] = useSendPasswordResetEmail(auth);

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const navigateToRegister = () => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert("Sent email.");
    }

    let form = location.state?.from?.pathname || '/';
    // this is added for solving error - //Cannot update a component (`BrowserRouter`) while rendering a different component (`Login`). To locate the bad setState() call inside `Login`
    useEffect(() => {
        if (user) {
            navigate(form, { replace: true });
        }
    }, [user, form, navigate]);

    return (

        <div className="container w-50 mx-auto ">
            <Card className='mt-5 p-3 pb-4 wrapper'>
                <h3 className='text-center  text-oranged'>Please Login </h3>
                <div className='mx-5'>

                    <Form onSubmit={handleFormSubmit}>

                        <Form.Group className="mb-2 w-75 mx-auto" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} className='login-input-form ' type="email" placeholder="Enter email" autoComplete='on' required />
                        </Form.Group>

                        <Form.Group className="mb-2 w-75 mx-auto" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} className='login-input-form' type="password" placeholder="Password" autoComplete='on' required />
                        </Form.Group>

                        <Form.Group className='w-75 mx-auto'>
                            <Button className='border-oranged text-oranged w-100' type="submit">
                                Login
                            </Button>
                        </Form.Group>

                    </Form>

                    <span className='mt-3'>{errorElement}</span>

                    <p className='text-center mt-2'>New to Genius Car? <Link to={'/register'} className='text-oranged navigate-register-btn text-decoration-none' onClick={navigateToRegister}>Please Register</Link></p>
                    <p className='text-center mt-2'>Forget password? <Link to={'/register'} className='text-oranged navigate-register-btn text-decoration-none' onClick={resetPassword}>Click here.</Link></p>

                    <div className="w-50 mx-auto">
                        <SocialLogin></SocialLogin>

                    </div>

                </div>
            </Card>
        </div>
    );
};

export default Login;