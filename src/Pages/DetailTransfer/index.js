import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Content from "../../Layout/Content";
import listAccount from "../../Data/account";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';

import { Icon } from "@iconify/react";

const DetailTransfer = () => {
  const { id } = useParams();
  const [account] = useState(listAccount[id - 1]);
  const [amount, setAmount] = useState()

  const handleTransfer = (e) => {
    e.preventDefault();
    localStorage.setItem("amount", amount)
    window.location.replace("/transfer-confirmation/" + account.id);
  };
  return (
    <Content>
      <Container>
        <Row className="d-flex flex-column justify-content-center">
          <Col >
            <h4>Transfer Money</h4>
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
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <Form.Control id="amount" className="border-0" type="number" style={{width: "150px", alignItems: "center"}}
            placeholder="0.00" name="amount" onChange={(e) => setAmount(e.target.value)}/>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
          <p>Rp {localStorage.getItem("balance")} available</p>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <Button onClick={handleTransfer} variant="outline-light" className="rounded-3 py-2 px-5" style={{background: '#6379F4'}} >Continue</Button>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default DetailTransfer;
