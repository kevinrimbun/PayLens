import React, { useState } from 'react'
import {  Row, Col } from 'react-bootstrap'
import Content from '../../Layout/Content'
import "../../Styles/Pages/AddPhoneNum/addphonenum.css"
import {BsTelephone} from "react-icons/bs"
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const AddPhoneNum = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('number', number)
    alert("added succes")
    navigate('/manage-phone')
    console.log(number);
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