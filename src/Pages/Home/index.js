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
import Footer from "../../Components/Footer";

// CSS


const Home = () => {

  return (
    <>
      {/* Navbar Section */}
      <NavbarComp />

      <div className="App w-100">
        <Container className="w-100 m-5 p-5">
          <Row>

            {/* Sidebar Section */}
            <Col sm={3} className=""><Sidebar /></Col>

            {/* Balance, Chart, Transaction History Section */}
            <Col sm={9} className="">

              <Container>
                <Row>
                  {/* Balance Section */}
                  <Col><BalanceComp /></Col>
                </Row>
              </Container>

              <Container classname=''>
                <Row>
                  {/* Chart Section */}
                  <Col sm={7} className=" mt-3">
                    <Chart />
                  </Col>
                  {/* Transaction History Section */}
                  <Col sm={5} className=" mt-3" >
                    <TransactionHistory />
                  </Col>
                </Row>
              </Container>

            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Home;
