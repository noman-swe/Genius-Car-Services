import React, { useRef } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../images/logos/google-logo.png';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    const navigateToRegister = () => {
        navigate('/register');
    }

    return (

        <div className="container w-50 mx-auto ">
            <Card className='mt-5 p-3 pb-4 wrapper'>
                <h3 className='text-center  text-oranged'>Please Register </h3>
                <div className='mx-5'>

                    <Form onSubmit={handleFormSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} className='login-input-form' type="email" placeholder="Enter email" autoComplete='on' required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} className='login-input-form' type="password" placeholder="Password" autoComplete='on' required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button className='btn border-oranged text-oranged w-100' type="submit">
                            Register
                        </Button>

                    </Form>

                    <p className='text-center mt-3'>Already Registered? <span className='text-oranged navigate-register-btn' onClick={navigateToRegister}>Please Login</span></p>

                    <Button className='btn border-oranged text-oranged w-100' type="submit">
                        Continue With <img height={25} src={googleLogo} alt="" />
                    </Button>

                </div>
            </Card>
        </div>
    );
}

export default Register;