import React from 'react';
import { Button } from 'react-bootstrap';
import googleLogo from '../../../images/logos/google-logo.png';


const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
                <p className='' style={{ marginTop: '12px' }}>Or</p>
                <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
            </div>
            <div className="social-links">
                <Button className='btn border-oranged text-oranged w-100' type="submit">
                    Continue With <img height={25} src={googleLogo} alt="" />
                </Button>
                <Button className='mt-3 btn border-oranged text-oranged w-100' type="submit">
                    Continue With <img height={25} src={googleLogo} alt="" />
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;