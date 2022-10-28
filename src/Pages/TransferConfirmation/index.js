import React, { useState } from 'react'
import listAccount from "../../Data/account";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import Content from '../../Layout/Content';

const TransferConfirmation = () => {
    const { id } = useParams();
  const [account] = useState(listAccount[id - 1]);
  return <Content>
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
            <p>
              Type the amount you want to transfer and then <br />
              press continue to the next steps
            </p>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center">
          <Col>
            <Link to="/transfer-confirmation">
              <Button variant="outline-light" className="m-2" style={{background: '#6379F4'}}>
                Continue
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
  </Content>
}

export default TransferConfirmation