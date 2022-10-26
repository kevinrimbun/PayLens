// Components

// Iconify
import { Icon } from '@iconify/react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

// CSS
import '../../Styles/Components/Navbar/Navbar.css'

// Components
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (

    <Navbar bg="light" expand="lg" className="border shadow-lg Navbar-Section">
      <Container>

        {/* Logo Section */}
        <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center Logo-Section">
          <Icon icon="mdi:google-lens" width="30" height="30" />
          <h4>PayLens</h4>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto me-auto p-1 d-flex justify-content-center align-items-center w-100">
            <Container fluid>
              <Row>

                {/* Unused Col */}
                <Col className="m-0 p-0"></Col>

                {/* User Section */}
                <Col className="d-flex align-items-center justify-content-end m-0 p-0 UserNavbar-Section">
                  <img src="" className="me-2 ImgUser-Navbar" alt="Profile" />
                  <div className="me-3">
                    <h6>Samuel Suhi</h6>
                    <p>+62 859-5158-6501</p>
                  </div>
                  <Icon icon="ei:bell" width="40" height="40" className="m-1"/>
                </Col>

              </Row>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;