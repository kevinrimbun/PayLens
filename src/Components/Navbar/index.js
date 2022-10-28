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
                <Col className="m-0 p-0"></Col>

                {/* User Section */}
                <Col className="d-flex justify-content-center align-items-center mt-3">
                  <img src={Samuel} className="rounded-circle me-2" alt="..." />
                  <div className="me-3">
                    <h6>Robert Chandler</h6>
                    <p>+62 {localStorage.getItem('number')}</p>
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