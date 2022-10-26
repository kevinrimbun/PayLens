import React from 'react';
import '../../Style/Layout/auth.css';
// import BGAuth from '../../Assets/BGAuth.svg'
import Wave from '../../Assets/wave.svg';
// import MaskGroup from '../../Assets'


const Auth = () => {
  return (
    <div className='auth-wrapper'>
        <div className='left-section'>
            <div className='title-left'>
                PayLens
            </div>
            <div className='img-wave'>
                <img src={Wave} alt='wave'/>
            </div>

        </div>
        <div className='right-section'>
            right sction
        </div>
    </div>
  )
}

export default Auth