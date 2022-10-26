import React from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import UserTranscation from "../../Components/User";

// CSS
import '../../Styles/Pages/History/History.css'

const History = () => {
  // Data Users
  const listUsers = [
    {
      picture: "https://i.pravatar.cc/50?img=3",
      name: "Samuel Suhi",
      transaction: "Transfer",
      nominal: "+ Rp 50.000"
    },
    {
      picture: "https://i.pravatar.cc/50?img=4",
      name: "IntelliJ",
      transaction: "Subcription",
      nominal: "- Rp 80.000"
    },
    {
      picture: "https://i.pravatar.cc/50?img=1",
      name: "Christine Mar...",
      transaction: "Transfer",
      nominal: "+ Rp 90.000"
    },
    {
      picture: "https://i.pravatar.cc/50?img=2",
      name: "Netflix",
      transaction: "Subcription",
      nominal: "+ Rp 30.000"
    }

  ]

  return (
    <>
      {/* Navbar Section */}
      <NavbarComp />

      <div className="App w-100 p-1">
        <Container fluid className="w-100 p-5 Container-Section p-1">
          <Row>

            {/* Sidebar Section */}
            <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

            {/* History Section */}
            <Col sm={8} className="History-Section p-4 ms-3 border shadow-lg">
              <h4>Transaction History</h4>
              <h5 className="mt-3">This Week</h5>
              {/* User Section */}
              <Row className='User-Section'>
                <Col>
                  {listUsers.map(user => {
                    return (
                      <UserTranscation picture={user.picture}
                        name={user.name}
                        transaction={user.transaction}
                        nominal={user.nominal} />
                    )
                  }
                  )}

                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default History;
