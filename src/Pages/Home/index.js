import React from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import BalanceComp from "../../Components/Balance";
import Chart from "../../Components/Chart";
import TransactionHistory from "../../Components/TransactionHistory";

// CSS
import '../../'


const Home = () => {

  return (
    <>
      <NavbarComp />
      <div className="App w-100">
        <Container className="w-100 border m-5 p-5">
          <Row>
            <Col sm={4} className=""><Sidebar /></Col>
            <Col sm={8} className="border">
              <Container>
                <Row>
                  <Col><BalanceComp /></Col>
                </Row>
              </Container>
              <Container classname=''>
                <Row>
                  <Col sm={8} className="border mt-3">
                    <Chart />
                  </Col>
                  <Col sm={4} className="border mt-3" >
                    <TransactionHistory />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
