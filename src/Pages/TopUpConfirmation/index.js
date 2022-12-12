import React, { useState } from "react";
import listAccount from "../../Data/account";

import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

import { PinInput, PinInputField } from "@chakra-ui/react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link, useParams, Component, useNavigate } from "react-router-dom";
import Content from "../../Layout/Content";
import { topUpService } from "../../services/topUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TopUpConfirmation = () => {

  const amounts = localStorage.getItem("amount")
  const balances = localStorage.getItem("balance")

  const navigate = useNavigate()
  const date = Date().toLocaleString()

  const [pin1, setInput1] = useState("");
  const [pin2, setInput2] = useState("");
  const [pin3, setInput3] = useState("");
  const [pin4, setInput4] = useState("");
  const [pin5, setInput5] = useState("");
  const [pin6, setInput6] = useState("");
  const [error, setError] = useState(false);

  const pinn1 = localStorage.getItem("pin1")
  const pinn2 = localStorage.getItem("pin2")
  const pinn3 = localStorage.getItem("pin3")
  const pinn4 = localStorage.getItem("pin4")
  const pinn5 = localStorage.getItem("pin5")
  const pinn6 = localStorage.getItem("pin6")

  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Modal2
  const [showModal2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  const topUp = async () => {
    const userId = localStorage.getItem("userId") ;
    const data = {
      amount: amounts,
      pin: pin1 + pin2 + pin3 + pin4 + pin5 + pin6
    }

    const response = await topUpService(data, +userId);
    console.log(response);
    const responseData = response.data.message;
    if (response.status === 401) {
      toast.error(responseData, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
    if (response.status === 201) {
      // alert(responseData);
      const result = parseInt(amounts) + parseInt(balances)
      localStorage.setItem("balance" , result)
      handleClose();
      handleShow2();
    }
}

  const handleSuccess = (e) => {
    e.preventDefault();
    topUp();
  };

  const handleFailed = (e) => {
    e.preventDefault();
    handleClose();
    toast.error("Canceled", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  };

  const handleSuccess2 = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  };

  const handleFailed2 = (e) => {
    e.preventDefault();
    handleClose2();
  };

  return (
    <>
            {/* Navbar Section */}
            <NavbarComp />

            <div className="App w-100 p-1">
                <Container fluid className="w-100 p-5 Container-Section p-1">
                    <Row>

                        {/* Sidebar Section */}
                        <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

                        {/* TopUp Section */}
                        <Col sm={8} className="Topup-Section p-4 ms-3 shadow-lg">
                        <Container>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <h4>Top Up Detail</h4>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center mt-2">
          <Col>
            <Card>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Card.Text>Amount</Card.Text>
                      <Card.Text>Rp. {localStorage.getItem("amount")}</Card.Text>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center mt-2">
          <Col>
            <Card>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Card.Text>Date & Time</Card.Text>
                      <Card.Text>{date}</Card.Text>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center mt-2">
          <Col>
            <Button
              variant="outline-light"
              onClick={handleShow}
              className="m-2"
              style={{ background: "#6379F4" }}
            >
              Continue
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter PIN to Top Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Enter your 6 digits of PIN for confirmation <br />
            to continue top up the money
          </p>
          <PinInput className="d-flex pin-input">
            <PinInputField
              className="pin-input text-center"
              name="pin1"
              onChange={(e) => setInput1(e.target.value)}
            />
            <PinInputField
              className="pin-input text-center"
              name="pin2"
              onChange={(e) => setInput2(e.target.value)}
            />
            <PinInputField
              className="pin-input text-center"
              name="pin3"
              onChange={(e) => setInput3(e.target.value)}
            />
            <PinInputField
              className="pin-input text-center"
              name="pin4"
              onChange={(e) => setInput4(e.target.value)}
            />
            <PinInputField
              className="pin-input text-center"
              name="pin5"
              onChange={(e) => setInput5(e.target.value)}
            />
            <PinInputField
              className="pin-input text-center"
              name="pin6"
              onChange={(e) => setInput6(e.target.value)}
            />
          </PinInput>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-light"
            onClick={handleFailed}
            className="m-2"
            style={{ background: "#6379F4" }}
          >
            Cancel
          </Button>
          <Button
            variant="outline-light"
            onClick={handleSuccess}
            className="m-2"
            style={{ background: "#6379F4" }}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal 2 */}
      <Modal show={showModal2}>
        <Modal.Header>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Top up success updated
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-light"
            onClick={handleSuccess2}
            className="m-2"
            style={{ background: "#6379F4" }}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
        
  );
};

export default TopUpConfirmation;
