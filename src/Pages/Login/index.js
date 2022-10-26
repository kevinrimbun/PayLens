import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../Layout/Auth';
import '../../Style/Pages/auth.css';
import { CiLock } from 'react-icons/ci';
import {BsEnvelope} from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

const Login = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    // let history = useHistory();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0 || password.length === 0) {
            setError(true)
        } else if (email === "kevin@mail.com" && password === "kevin123") {
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
                        <input type={show ? 'text' : 'password'} className="form-control form-auth passsword" id="password" placeholder="Enter your password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <Button className='btn-visibility' h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </div>

                    <div className='forgot-password mt-2'>
                        <Link>
                            Forgot Your Password?
                        </Link>
                    </div>
                    
                    <div className='error-message'>
                        {error && email !== "kevin@mail.com" && password !== "kevin123" && email.length <= 0 && password.length <= 0 ?
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