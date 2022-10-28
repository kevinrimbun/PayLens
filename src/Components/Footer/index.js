import React from "react";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer id="sticky-footer" className="d-flex-shrink-0 py-4 bg-primary text-white">
            <div className="container mb-3">
                <small className='float-start'>&copy; 2022 PayLens</small>
                <Link to='/contact' className='text-white'>
                    <p className='float-end mx-4'> contact@paylens.com</p>
                </Link>
                <p className='float-end'> +62 {localStorage.getItem('number')}</p>
            </div>
        </footer>
    );
}

export default Footer;



