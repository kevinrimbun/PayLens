import React, { useState } from 'react';
import Auth from '../../Layout/Auth';
import '../../Styles/Pages/auth.css';
import {BsEnvelope} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { changePasswordService } from '../../services/changePassword';
import { sendEmailService } from '../../services/mail';
// import { Button } from '@chakra-ui/react';

const ResetPass = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)

    const sendEmail = async () => {
        // localStorage.getItem("email")
        const data ={
            recipient: email
        }
        const response = await sendEmailService(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
        // if (email = response.data.data.email) {
            
        // }
        
        localStorage.setItem(email);
    }
    


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     localStorage.getItem("email")
    //     if (email.length === 0) {
    //         setError(true)
    //     } else if (email === localStorage.getItem("email")) {
    //         // window.location.replace("/dashboard")
    //         navigate("/new-password", { replace: true })
    //     } else if (email != localStorage.getItem("email")){
    //         setError(true)
    //     } else {
    //         setError(true)
    //     }
    // }

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

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className='mt-4 d-flex form-email'>
                        <BsEnvelope className='bi envelope-icon' />
                        <input  type="email" className="form-control form-auth" id="email" placeholder="Enter your e-mail" name="email" onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className='error-message'>
                        {error && email !== localStorage.getItem("email") ?
                        <label>Email Invalid !</label>:""}
                    </div>

                    <div className='error-message'>
                        {error && email.length === 0 ?
                        <label>Input cannot be empty !</label>:""}
                    </div>

                    <button className="btn-auth" id='submit' type="submit" value="Enter">Confirm</button>

                </form>

            </div>

        </div>


    </Auth>
}

export default ResetPass