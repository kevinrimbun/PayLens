import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../Layout/Auth';
import '../../Styles/Layout/Auth/auth.css';
import { CiLock } from 'react-icons/ci';
import {BsEnvelope} from 'react-icons/bs';
import {AiFillLock,AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
const eye = <AiOutlineEye/>
const eyeClose = <AiOutlineEyeInvisible/>

const Login = () => {

    const [passwordShown1, setPasswordShown1] = useState(false);
    const togglePasswordVisiblity1 = () => {
        setPasswordShown1(passwordShown1 ? false : true);
    };

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.getItem("email")
        localStorage.getItem("password")
        if (email.length === 0 || password.length === 0) {
            setError(true)
        } else if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
            // window.location.replace("/dashboard")
            navigate("/dashboard", { replace: true })
        } else {
            setError(true)
        }
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
    }

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
                Start Accessing Banking Needs With All Devices and All Platform With 30.000+ Users
            </div>
            <div className='subtitle-bottom-right'>
                Transferring Money is eassier than ever, you can access PayLens wherever you are. Desktop, Laptop, Mobile Phone? we cover all of that over you.
            </div>

            <div className='form-right'>

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className='mt-4 d-flex form-email'>
                        <BsEnvelope className='bi envelope-icon' />
                        <input  type="email" className="form-control form-auth" id="email" placeholder="Enter your e-mail" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    {/* Password */}
                    <div className='mt-4 d-flex form-password'>
                        <CiLock className='bi lock-icon'/>
                        <input type={passwordShown1 ? "text" : "password"} className="form-control form-auth passsword" id="password" placeholder="Enter your password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <i onClick={togglePasswordVisiblity1}>{passwordShown1 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }</i>
                    </div>

                    <div className='forgot-password mt-2'>
                        <Link to='/reset-password'>
                            Forgot Your Password?
                        </Link>
                    </div>
                    
                    <div className='error-message'>
                        {error && email !== localStorage.getItem("email") && password !== localStorage.getItem("password") ?
                        <label>Email or Password Invalid !</label>:""}
                    </div>

                    <button className="btn-auth" id='submit' type="submit" value="Enter">Login</button>
                </form>
                <div className='text-center mt-4'>
                    Don't have an account? Let's <Link to='/register'>Sign Up</Link>
                </div>
            </div>

        </div>
    </Auth>
}

export default Login