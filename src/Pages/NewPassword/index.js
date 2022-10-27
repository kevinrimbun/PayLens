import React from 'react';
import Auth from '../../Layout/Auth';
import { CiLock } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const NewPassword = () => {
    const [show1, setShow1] = React.useState(false)
    const [show2, setShow2] = React.useState(false)
    const handleClick1 = () => setShow1(!show1)
    const handleClick2 = () => setShow2(!show2)

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

                <form>

                    <div className='mt-4 d-flex form-password'>
                        <CiLock className='bi lock-icon'/>
                        <input type={show1 ? 'text' : 'password'} className="form-control form-auth passsword" id="password" placeholder="Create new password" name="password"  />
                        <Button className='btn-visibility' h='1.75rem' size='sm' onClick={handleClick1}>
                            {show1 ? 'Hide' : 'Show'}
                        </Button>

                    </div>

                    <div className='mt-4 d-flex form-password'>
                        <CiLock className='bi lock-icon'/>
                        <input type={show2 ? 'text' : 'password'} className="form-control form-auth passsword" id="password" placeholder="Create new password" name="password"  />
                        <Button className='btn-visibility' h='1.75rem' size='sm' onClick={handleClick2}>
                            {show2 ? 'Hide' : 'Show'}
                        </Button>
                    </div>

                    <Link to='/new-password'>
                        <button className="btn-auth" id='submit' type="submit" value="Enter">Confirm</button>
                    </Link>

                </form>

            </div>

        </div>
    </Auth>
}

export default NewPassword