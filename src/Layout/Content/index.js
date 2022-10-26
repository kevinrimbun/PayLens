import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Content = () => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper w-100">
        <Container className="w-100 m-5 p-5">
          <Row>
            <Col sm={3}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
