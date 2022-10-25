import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from '../../Pages/Landing-Page';


const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/landing-page' element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default index