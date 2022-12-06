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

const TopUpConfirmation = () => {

  var amounts = localStorage.getItem("amount")
  var balances = localStorage.getItem("balance")
  const  result = balances - amounts

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

  const handleSuccess = (e) => {
    e.preventDefault();
    if (pin1 === pinn1 && pin2 === pinn2 && pin3 === pinn3 && pin4 === pinn4 && pin5 === pinn5 && pin6 === pinn6) { 
      navigate("/success-topup");
    }
    if (pin1 != pinn1 || pin2 != pinn2 || pin3 != pinn3 || pin4 != pinn4 || pin5 != pinn5 || pin6 != pinn6) {
      alert("PIN salah, silahkan masukkan ulang")
    }
  };

  const handleFailed = (e) => {
    e.preventDefault();
    navigate("/failed-topup");
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
          <Modal.Title>Enter PIN to Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Enter your 6 digits of PIN for confirmation <br />
            to continue transferring the money
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
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
  );
};

export default TopUpConfirmation;
