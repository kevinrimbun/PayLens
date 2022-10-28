import React, { useEffect, useState } from 'react'
import {  Row, Col } from 'react-bootstrap'
import Content from '../../Layout/Content'
import {BiTrashAlt} from "react-icons/bi"
import "../../Styles/Pages/ManagePhoneNum/managephonenum.css"
import { useNavigate } from 'react-router-dom'
const ManagePhoneNum = () => {
  const navigate = useNavigate();
  const dibuang = () => {
    alert("Dibuang seperti mantan");
    navigate('/addphonenum')
  }

  return <Content>
    <Row>
    <div className='addnum-title'>
        <h4>Manage Phone Number</h4>
         <p>You can only delete the phone number <br /> and then you must add another phone number.</p>
        </div>
    </Row>
    <Row>
    <div className='mt-5'>
            <div className="d-flex managenum-body">
            <h5>+62 {localStorage.getItem('number')}</h5>
            <i onClick={dibuang}> <BiTrashAlt/> </i> 
            </div>
        </div>
    </Row>
        
        
            

  </Content>
}

export default ManagePhoneNum