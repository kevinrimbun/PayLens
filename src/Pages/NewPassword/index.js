import React, { useState } from 'react';
import Auth from '../../Layout/Auth';
import { CiLock } from 'react-icons/ci';
import { useNavigate, useParams } from 'react-router-dom';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { changePasswordService } from '../../services/changePassword';
const eye = <AiOutlineEye/>
const eyeClose = <AiOutlineEyeInvisible/>

const NewPassword = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const [password, setPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [error, setError] = useState(false);

    const togglePasswordVisiblity1 = () => {
        setPasswordShown1(passwordShown1 ? false : true);
    };
    
    const togglePasswordVisiblity2 = () => {
        setPasswordShown2(passwordShown2 ? false : true);
    };

    const changePassword = async () => {
        const data ={
            password
        }
        const response = await changePasswordService(data,id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        changePassword();
        // localStorage.setItem(password);
        navigate('/login')

        // if (newPassword !== localStorage.getItem(password)) {
        //     setError(true)
        // }else{
            
        // }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (password === localStorage.getItem('password')) {
    //         setError(true)
    //     } else if (password.length === 0 && newPassword.length === 0) {
    //         setError(true)
    //     } else if (newPassword !== password) {
    //         setError(true)
    //     } else {
    //         localStorage.setItem('password', newPassword)
    //         navigate('/login')
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
                    Login
                </div>
                <div className='subtitle-mobile'>
                    Login to your existing account to access all the features in PayLens
                </div>
            </div>
            {/* ----BATAS---- */}

            <div className='title-top-right'>
                Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes.
            </div>
            <div className='subtitle-bottom-right'>
                Now you can create a new password for your PayLens account. Type your password twice so we can confirm your new password.
            </div>

            <div className='form-right'>
                <form onSubmit={handleSubmit}>
                    <div className='mt-4 d-flex form-password'>
                        <CiLock className='bi lock-icon'/>
                        <input type={passwordShown1 ? "text" : "password"} className="form-control form-auth passsword" id="password" placeholder="Create new password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <i onClick={togglePasswordVisiblity1}>{passwordShown1 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }</i>
                    </div>

                    {/* <div className='error-message'>
                        {error && password === localStorage.getItem("password") ?
                        <label>New Password must be different!</label>:""}
                    </div> */}

                    <div className='mt-4 d-flex form-password'>
                        <CiLock className='bi lock-icon'/>
                        <input type={passwordShown2 ? "text" : "password"} className="form-control form-auth passsword" id="password" placeholder="Create new password" name="password" onChange={(e) => setnewPassword(e.target.value)}  />
                        <i onClick={togglePasswordVisiblity2}>{passwordShown2 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }</i>
                    </div>

                    <div className='error-message'>
                        {error && newPassword !== password?
                        <label>Password do not match !</label>:""}
                    </div>

                    <div className='error-message'>
                        {error && password.length === 0  && newPassword.length === 0?
                        <label>input cannot be empty !</label>:""}
                    </div>
                    
                    <button className="btn-auth" id='submit' type="submit" value="Enter">Confirm</button>
                </form>

            </div>
        </div>
    </Auth>
}

export default NewPassword