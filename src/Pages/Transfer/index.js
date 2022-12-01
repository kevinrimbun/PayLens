import React, { useState } from "react";
import Content from "../../Layout/Content";
import listAccount from "../../Data/account";
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

import { Icon } from "@iconify/react";

import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

// CSS
import '../../Styles/Pages/Transfer/Transfer.css'

const Transfer = () => {
  const [accounts] = useState(listAccount);
  return (
    <>
      {/* Navbar Section */}
      <NavbarComp />

      <div className="App w-100 p-1">
        <Container fluid className="w-100 p-5 Container-Section p-1">
          <Row>

            {/* Sidebar Section */}
            <Col sm={3} className="Sidebar-Section p-1">
              <Sidebar />
            </Col>

            {/* Transfer Section */}
            <Col sm={8} className="Transfer-Section p-4 ms-3 shadow-lg">
              <Container>
                <Row className="d-flex flex-column justify-content-center">
                  <Col>
                    <h4>Search Receiver</h4>
                  </Col>
                </Row>
                <Row className="d-flex flex-column justify-content-center">
                  <Col>
                    <InputGroup className="sm-3 mb-3 mt-2">
                      
                      <Button color="#6379F4"><Icon icon="ant-design:search-outlined" width="20" height="15" className="m-1" /></Button>
                      
                      <Form.Control placeholder="Search receiver here" aria-label="Search receiver here" aria-describedby="search" />
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="d-flex flex-column justify-content-center">
                  <Col className="card-receiver">
                    {accounts.map((getAccount) => {
                      return (
                        <Card className="user-receiver my-3 User-Section shadow-lg" key={getAccount.id}>
                          <Card.Body>
                            <Link to={"/transfer-detail/" + getAccount.id} className="text-decoration-none text-dark">
                              <Container>
                                <Row>
                                  <Col lg={2}>
                                    <Card.Img style={{ height: "70px", width: "70px" }} src={getAccount.profilePic} />
                                  </Col>
                                  <Col>
                                    <Card.Text>{getAccount.name}</Card.Text>
                                    <Card.Text>{getAccount.phone}</Card.Text>
                                  </Col>
                                  <Col></Col>
                                </Row>
                              </Container>
                            </Link>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Transfer;
