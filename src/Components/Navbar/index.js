// Components
import { Link } from 'react-router-dom';

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
import Samuel from  '../../Assets/account/samuelSuhi.svg'

function NavbarComp() {
  return (

    <Navbar bg="light" expand="lg" className="border shadow-lg Navbar-Section">
      <Container>

        {/* Logo Section */}
        <Link to='/dashboard' className='text-decoration-none'>
          <Navbar.Brand  className="d-flex justify-content-center align-items-center Logo-Section">
            <Icon icon="mdi:google-lens" width="30" height="30" />
            <h4>PayLens</h4>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto me-auto p-1 d-flex justify-content-center align-items-center w-100">
            <Container fluid>
              <Row>

                {/* Unused Col */}
                <Col className="usernav-wrapper ms-5 p-0"></Col>

                {/* User Section */}
                <Col className=" ms-5 d-flex justify-content-center align-items-center">
                  <img src={Samuel} className="img-navbar rounded me-2" alt="..." />
                  <div className="infouser-nav me-3">
                    <h6>{localStorage.getItem("username")}</h6>
                    <p>+62 859-5158-6501</p>
                  </div>
                  <Icon icon="ei:bell" width="40" height="40" className="m-1 bell-navbar"/>
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