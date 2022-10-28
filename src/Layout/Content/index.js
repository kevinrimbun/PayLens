import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

import "../../Styles/Components/Sidebar/Sidebar.css";
import "../../Styles/Layout/Content/Content.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Content = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="content-wrapper w-100 p-1">
        <Container fluid className="w-100 p-5 container-wrapper p-1">
          <Row>
            <Col sm={3} className="sidebar-wrapper p-1">
              <Sidebar />
            </Col>
            <Col sm={8} className="p-1 ms-2">
              <Card className="shadow-lg card-wrapper">
                <Card.Body>
                  {children}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
