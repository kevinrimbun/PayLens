import React from 'react';
import Auth from '../../Layout/Auth';
import '../../Style/Pages/auth.css';
import {BsEnvelope} from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { Button } from '@chakra-ui/react';

const ResetPass = () => {

    return <Auth>
        <div className='title-right-wrapper'>

            {/* For Responsive */}
            <div className='logo-mobile'>
                PayLens
            </div>

            <div className='title-wrapper'>
                <div className='title-mobile'>
                    Reset Password
                </div>
                <div className='subtitle-mobile'>
                    Enter your PayLens e-mail so we can send you a password reset link.
                </div>
            </div>
            {/* ----BATAS---- */}

            <div className='title-top-right'>
                Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes.
            </div>
            <div className='subtitle-bottom-right'>
                To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens
            </div>

            <div className='form-right'>

                <form>
                    {/* Email */}
                    <div className='mt-4 d-flex form-email'>
                        <BsEnvelope className='bi envelope-icon' />
                        <input  type="email" className="form-control form-auth" id="email" placeholder="Enter your e-mail" name="email" />
                    </div>

                    <Link to='/new-password'>
                        <button className="btn-auth" id='submit' type="submit" value="Enter">Confirm</button>
                    </Link>

                </form>

            </div>

        </div>


    </Auth>
}

export default ResetPass