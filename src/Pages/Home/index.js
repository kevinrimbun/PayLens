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
import '../../Styles/Pages/Home/Home.css'

const Home = () => {

  return (
    <>
      {/* Navbar Section */}
      <NavbarComp />

      <div className="App w-100 p-1">
        <Container fluid className="container-home p-5 Container-Section p-1">
          <Row>

            {/* Sidebar Section */}
            <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

            {/* Balance, Chart, Transaction History Section */}
            <Col sm={8} className="Content-Section p-1 ms-3">

              <Container fluid>
                <Row>
                  {/* Balance Section */}
                  <Col className="Balance-Section p-1"><BalanceComp /></Col>
                </Row>
              </Container>

              {/* Chart, History Section */}
              <Container fluid className='history-wrapper'>
                <Row>
                  {/* Chart Section */}
                  <Col sm={7} className=" mt-3 Chart-Section p-1">
                    <Chart />
                  </Col>
                  {/* Transaction History Section */}
                  <Col sm={5} className=" mt-3 History-Section p-1" >
                    <TransactionHistory />
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

export default Home;
