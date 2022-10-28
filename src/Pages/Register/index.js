import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../Layout/Auth';
import '../../Styles/Layout/Auth/auth.css';
import { BsPerson } from 'react-icons/bs'
import { CiLock } from 'react-icons/ci';
import {BsEnvelope} from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

const Register = () => {
    
    const navigate = useNavigate()
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        if (username.length === 0  || email.length === 0 || password.length === 0) {
            setError(true)
        } else if  (username.length !== 0  || email.length !== 0 || password.length !== 0) {
            navigate('/create-pin', { replace : true })
        }
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
    }

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

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

                    {/* Username */}
                    <div className='mt-4 d-flex form-username'>
                        <BsPerson className='bi' />
                        <input autoComplete='off' type="text" className="form-control form-auth" id="username" placeholder="Enter your username" name="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='error-message'>
                        {error && username.length <= 0 ?
                        <label>Username cannot be empty !</label>:""}
                    </div>

                    {/* Email */}
                    <div className='mt-4 d-flex form-email'>
                        <BsEnvelope className='bi' />
                        <input autoComplete='off' type="email" className="form-control form-auth" id="email" placeholder="Enter your e-mail" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='error-message'>
                        {error && email.length <= 0 ?
                        <label>Email cannot be empty !</label>:""}
                    </div>

                    {/* Password */}
                    <div className='mt-4 d-flex form-password'>
                        <CiLock className='bi lock-icon'/>
                        <input autoComplete='off' type={show ? 'text' : 'password'} className="form-control password form-auth" id="password" placeholder="Enter your password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <Button className='btn-visibility' h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </div>
                    <div className='error-message'>
                        {error && password.length <= 0 ?
                        <label>Password cannot be empty !</label>:""}
                    </div>

                    <button className="btn-auth" id='submit' type="submit" value="Enter">Register</button>

                </form>

                <div className='text-center mt-4'>
                    Already have an account? Let's <Link to='/login'>Login</Link>
                </div>

            </div>

        </div>
    </Auth>
}

export default Register