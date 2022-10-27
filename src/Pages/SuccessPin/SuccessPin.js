import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../Layout/Auth';
import '../../Styles/Pages/auth.css';

const SuccessPin = () => {
  return <Auth>
    <div className='successpin-wrapper'>
        <div>
            <i className="bi bi-check2 rounded-circle logo-success"></i>
        </div>
        <div className='mt-4 success-title'>
            Your PIN Was Successfully Created 
        </div>
        <div className='mt-4 desc-success'>
            Your PIN was successfully created and you can now access all he features in PayLens. Login to your new account and start exploring!
        </div>
        <Link to='/login'>
            <button className="btn-auth" id='submit' value="Enter">Login Now</button>
        </Link>
    </div>
  </Auth>
}

export default SuccessPin