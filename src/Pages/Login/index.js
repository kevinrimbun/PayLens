import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../Layout/Auth';
import '../../Style/Pages/auth.css';
import { CiLock } from 'react-icons/ci';
import {BsEnvelope} from 'react-icons/bs';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0 || password.length === 0) {
            setError(true)
        } else if (email === "kevin@mail.com" && password === "kevin123") {
            window.location.replace("/dashboard")
        } else {
            setError(true)
        }
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
    }



    return <Auth>
        <div className='title-right-wrapper'>

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
                    <div className='error-message'>
                        {error && email.length <= 0 ?
                        <label>Email cannot be empty !</label>:""}
                    </div>

                    {/* Password */}
                    <div className='mt-4 d-flex form-password'>
                        <CiLock className='bi lock-icon'/>
                        <input  type="password" className="form-control form-auth passsword" id="password" placeholder="Enter your password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <i className="bi bi-eye" id='togglePassword'/> : <i class="bi bi-eye-slash"></i>
                    </div>
                    <div className='error-message'>
                        {error && password.length <= 0 ?
                        <label>Password cannot be empty !</label>:""}
                    </div>

                    <div className='forgot-password mt-2'>
                        <Link>
                            Forgot Your Password?
                        </Link>
                    </div>
                    
                    <div className='error-message'>
                        {error && email !== "kevin@mail.com" && password !== "kevin123" ?
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