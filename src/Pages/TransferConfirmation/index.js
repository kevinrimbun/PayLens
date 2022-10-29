import React, { useState } from "react";
import listAccount from "../../Data/account";

import { PinInput, PinInputField } from "@chakra-ui/react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import Content from "../../Layout/Content";

const TransferConfirmation = () => {
  const [pin1, setInput1] = useState("");
  const [pin2, setInput2] = useState("");
  const [pin3, setInput3] = useState("");
  const [pin4, setInput4] = useState("");
  const [pin5, setInput5] = useState("");
  const [pin6, setInput6] = useState("");
  const [error, setError] = useState(false);

  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { id } = useParams();
  const [account] = useState(listAccount[id - 1]);

  const handleSuccess = (e) => {
    e.preventDefault();
    window.location.replace("/transfer-berhasil/" + account.id);
  };

  return (
    <Content>
      <Container>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <h4>Transfer to</h4>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <Card key={account.id}>
              <Card.Body>
                <Container>
                  <Row>
                    <Col sm={2}>
                      <Card.Img
                        style={{ height: "70px", width: "70px" }}
                        src={account.profilePic}
                      />
                    </Col>
                    <Col sm={2}>
                      <Card.Text>{account.name}</Card.Text>
                      <Card.Text>{account.phone}</Card.Text>
                    </Col>
                    <Col></Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <h4>Details</h4>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <Card>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Card.Text>Amount</Card.Text>
                      <Card.Text></Card.Text>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <Card>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Card.Text>Balance left</Card.Text>
                      <Card.Text></Card.Text>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <Card>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Card.Text>Date & Time</Card.Text>
                      <Card.Text></Card.Text>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <Card>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Card.Text>Notes</Card.Text>
                      <Card.Text></Card.Text>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
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
            onClick={handleClose}
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
    </Content>
  );
};

export default TransferConfirmation;