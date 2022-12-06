import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { phoneNumberService } from '../../services/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Content from '../../Layout/Content'

// CSS
import "../../Styles/Pages/AddPhoneNum/addphonenum.css"

// React Icon
import { BsTelephone } from "react-icons/bs"

// Bootstrap
import Container from "react-bootstrap/Container"
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

const AddPhoneNum = () => {
  const navigate = useNavigate();
  const [phoneNumber, setNumber] = useState("");
  const phoneNumStr = phoneNumber.toString();

  const addPhoneNumber = async () => {
    const detailUserId = localStorage.getItem("detailUserId") ;
    const data = {
      phoneNumber: phoneNumStr
    };

    const response = await phoneNumberService(data, +detailUserId);
    console.log(response);
    if (response.status !== 201) {
        toast.error(response.data.errors.username, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    } else {
        const responseData = response.data.data;
        navigate('/manage-phone', { replace : true })
        return responseData;
    }
};

  const handlesubmit = (e) => {
    e.preventDefault();
    addPhoneNumber();
    // localStorage.setItem('number', number)
    // alert("added succes")
    // navigate('/manage-phone')
    // console.log(number);
  }
  return <>
    {/* Navbar Section */}
    <NavbarComp />

    <div className="App w-100 p-1">
      <Container fluid className="w-100 p-5 Container-Section p-1">
        <Row>

          {/* Sidebar Section */}
          <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

          {/* Add Phone Section */}
          <Col sm={8} className="Profile-Section p-4 ms-3 shadow-lg d-flex flex-column justify-content-center align-items-center">
            <div className='addnum-title text-center'>
              <h4>Add Phone Number</h4>
              <p>Add at least one phone  number for <br /> the transfer ID so you can start transfering <br /> your money to another user.</p>
            </div>
            <div className='d-flex align-items-center justify-content-center addnum-body'>
              <form onSubmit={handlesubmit}>
                <div className="">
                  <BsTelephone /> <label htmlFor="">+62</label> <input type="number" onChange={(e) => setNumber(e.target.value)} style={{ outlineStyle: 'none' }} placeholder='Masukan nomor disini' />
                  <hr />
                  <Button className='btn-addphonee' type='submit'>Add Number</Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
  </>

}

export default AddPhoneNum