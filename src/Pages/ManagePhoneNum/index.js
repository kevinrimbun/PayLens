import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Content from '../../Layout/Content'
import { BiTrashAlt } from "react-icons/bi"
import "../../Styles/Pages/ManagePhoneNum/managephonenum.css"
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
const ManagePhoneNum = () => {
  const navigate = useNavigate();
  const dibuang = () => {
    alert("Dibuang seperti mantan");
    localStorage.removeItem("number")
    navigate('/addphonenum')
  }

  return <Content>
    <Row>
      <div className='addnum-title'>
        <h4>Manage Phone Number</h4>
        <p>You can only delete the phone number <br /> and then you must add another phone number.</p>
      </div>
    </Row>
    <Row className='p-4'>
      <Card style={{ width: '100%' }} className='shadow mt-3 CardPhone'>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Phone Number</Card.Subtitle>
          <Card.Subtitle className="float-end Delete-Button"><i onClick={dibuang}> <BiTrashAlt /> </i>
          </Card.Subtitle>
          <Card.Text>
            <div className="d-flex managenum-body">
              <h5>+62 {localStorage.getItem('number')}</h5>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>




  </Content>
}

export default ManagePhoneNum