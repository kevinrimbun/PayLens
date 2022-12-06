import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// React Icon
import { BiTrashAlt } from "react-icons/bi"

// Bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

// CSS
import "../../Styles/Pages/ManagePhoneNum/managephonenum.css"

const ManagePhoneNum = () => {
  const dibuang = () => {
    alert("Nomor telepon berhasil dihapus!");
    localStorage.removeItem("number")
  }

  return <>
    {/* Navbar Section */}
    <NavbarComp />

    <div className="App w-100 p-1">
      <Container fluid className="w-100 p-5 Container-Section p-1">
        <Row>

          {/* Sidebar Section */}
          <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

          {/* Profile Section */}
          <Col sm={8} className="Profile-Section p-4 ms-3 shadow-lg d-flex flex-column justify-content-center align-items-center">
            <Row>
              <div className='addnum-title text-center'>
                <h4>Manage Phone Number</h4>
                <p>You can only delete the phone number <br /> and then you must add another phone number.</p>
              </div>
            </Row>
            <Row className='p-4 w-100 border-0'>
              <Card style={{ width: '100%' }} className='shadow mt-3 CardPhone border-0'>
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
            <Link to='/add-phone'>
              <button className="btn-addphone mt-2" id='submit' type="submit" value="Enter">Add Phone Number</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
  </>

}

export default ManagePhoneNum