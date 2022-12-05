import React, { useState } from 'react'
import {  Row, Col } from 'react-bootstrap'
import Content from '../../Layout/Content'
import "../../Styles/Pages/AddPhoneNum/addphonenum.css"
import {BsTelephone} from "react-icons/bs"
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { phoneNumberService } from '../../services/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  return <Content>
        <div className='addnum-title'>
        <h4>Add Phone Number</h4>
         <p>Add at least one phone  number for <br /> the transfer ID so you can start transfering <br /> your money to another user.</p>
        </div>
        <div className='d-flex align-items-center justify-content-center addnum-body'>
          <form onSubmit={handlesubmit}>
            <div className="">
              <BsTelephone/><input class="ms-2" type="tel" onChange={(e) => setNumber(e.target.value)} style={{outlineStyle: 'none' }} placeholder='Masukan nomor disini' required/>
              <hr />
              <Button className='btn-addphonee' type='submit'>Add Number</Button>
            </div>
          </form>
        </div>
        
            

  </Content>
}

export default AddPhoneNum