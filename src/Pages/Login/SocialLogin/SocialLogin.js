import React from 'react';
import { Button } from 'react-bootstrap';
import googleLogo from '../../../images/logos/google-logo.png';
import fbLogo from '../../../images/logos/fb.png';
import githubLogo from '../../../images/logos/github.png';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
                <p className='' style={{ marginTop: '12px' }}>Or</p>
                <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
            </div>
            <div className="social-links">
                <Button className='btn social-btn-google text-oranged w-100' type="submit">
                    Google Sign in<img height={25} src={googleLogo} alt="" />
                </Button>
                <Button className='mt-3 btn social-btn-fb text-oranged w-100' type="submit">
                    Facebook Sign in <img height={25} src={fbLogo} alt="" />
                </Button>
                <Button className='mt-3 btn social-btn-github text-oranged w-100' type="submit">
                    Github Sign in <img height={25} src={githubLogo} alt="" />
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;