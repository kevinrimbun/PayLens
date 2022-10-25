import React from 'react';
import '../../Style/Layout/auth.css';
import Wave from '../../Assets/Wave.svg';
import PhoneAuth from '../../Assets/PhoneAuth.svg';
import PhoneAuth2 from '../../Assets/PhoneAuth2.svg';


const Auth = (props) => {
    const {children} = props
    return (
        <div className='auth-wrapper'>
            <div className='left-section'>

                <div className='title-top'>
                    PayLens
                </div>

                <div className='img-wave'>
                    <img src={Wave} alt='wave'/>
                </div>

                <div className='phone-wrapper'>
                    <div className='phone-1'>
                        <img src={PhoneAuth} alt='phone-1'/>
                    </div>
                    <div className='phone-2'>
                        <img src={PhoneAuth2} alt='phone-2'/>
                    </div>
                </div>

                <div className='text-auth'>
                    <div className='title-bottom'>App that Covering Banking Needs</div><br />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sin</p>
                </div>

            </div>
            <div className='right-section'>
                {children}
            </div>
        </div>
    )
}

export default Auth