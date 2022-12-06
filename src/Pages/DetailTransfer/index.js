import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Content from "../../Layout/Content";
import listAccount from "../../Data/account";
import '../../Styles/Pages/DetailTransfer/detailtransfer.css'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';

import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

import { Icon } from "@iconify/react";

const DetailTransfer = () => {

  var amounts = localStorage.getItem("amount")
  var balances = localStorage.getItem("balance")
  const  result = balances - amounts

  const navigate = useNavigate();
  const { id } = useParams();
  const [account] = useState(listAccount[id - 1]);
  const [amount, setAmount] = useState()
  const [notes, setNotes] = useState()
  const [error, setError] = useState(false)

  const handelSubmit = (e) => {
    e.preventDefault()
    if (amount < localStorage.getItem("balance")) {
      localStorage.setItem("amount", amount) 
      localStorage.setItem("notes", notes)
      navigate('/transfer-confirmation/' + account.id, {replace : true})
    } else if (amount.length == 0) {
      setError(true)
    }
  }



  return (
    <>
      {/* Navbar Section */}
      <NavbarComp />

      <div className="App w-100 p-1">
        <Container fluid className="w-100 p-5 Container-Section p-1">
          <Row>

            {/* Sidebar Section */}
            <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

            {/* History Section */}
            <Col sm={8} className="History-Section p-4 ms-3 shadow-lg">
            <Container>
        <Row className="d-flex flex-column justify-content-center">
          <Col >
            <h4>Transfer Money</h4>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <Card key={account.id}>
              <Card.Body className="shadow p-3 ">
                <Container >
                  <Row>
                    <Col sm={2}>
                      <Card.Img
                        style={{ height: "70px", width: "70px" }}
                        src={account.profilePic}
                      />
                    </Col>
                    <Col sm={4}>
                      <Card.Text>{account.name}</Card.Text>
                      <Card.Text>{account.phone}</Card.Text>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col className="mt-4">
            <p>
              Type the amount you want to transfer and then <br />
              press continue to the next steps
            </p>
          </Col>
        </Row>
        <form onSubmit={handelSubmit}>

          <div className="add-amount">

            <Row className="d-flex flex-column justify-content-center">
              <Col>
                <Form.Control id="amount" className="border-0" type="number" style={{width: "150px"}}
                placeholder="0.00" name="amount" onChange={(e) => setAmount(e.target.value)}/>
              </Col>
            </Row>
            <Row className="d-flex flex-column justify-content-center">
              <Col>
              <p>Rp {result} available</p>
              </Col>
            </Row>

          </div>

          <div className="notes">
            <Row>
              <Col className="d-flex border-bottom">
                <i class="bi bi-pencil-fill"></i>
                <input className="form-control form-notes" id="password" placeholder="Add some notes" name="notes" onChange={(e) => setNotes(e.target.value)}/>
              </Col>
            </Row>
          </div>

          <div className='error-message'>
            {error && amount.length === 0 ?
            <label>Email or Password Invalid !</label>:""}
          </div>

          <div className=" btn-addamount">
            <Row className="d-flex flex-column justify-content-center">
              <Col>
                <Button type='submit' className="rounded-3 py-2 px-5" style={{background: '#6379F4'}} >Continue</Button>
              </Col>
            </Row>
          </div>
        </form>
      </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DetailTransfer;
