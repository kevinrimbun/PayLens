// Components
import { Link } from 'react-router-dom';

// Iconify
import { Icon } from '@iconify/react';
// IMG
import PaylensLogo from '../../Assets/paylens1.png'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

// CSS
import '../../Styles/Components/Navbar/Navbar.css'

// Components
import Navbar from 'react-bootstrap/Navbar';
import Samuel from '../../Assets/account/samuelSuhi.svg'

function NavbarComp() {
  return (

    <Navbar bg="light" expand="lg" className="border shadow-lg Navbar-Section">
      <Container>

        {/* Logo Section */}
        <Link to='/dashboard' className='text-decoration-none'>
          <Navbar.Brand className="d-flex justify-content-center align-items-center Logo-Section">
            <img src={PaylensLogo} className='logo-paylens' />
            <h4>PayLens</h4>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto me-auto p-1 d-flex justify-content-center align-items-center w-100">
            <Container fluid>
              <Row>

                {/* Unused Col */}
                <Col className="m-0 p-0 me-5"></Col>

                {/* User Section */}
                <Col className="d-flex justify-content-center user-nav align-items-center mt-3  float-end">
                  <img src={Samuel} className="img-navbar rounded me-2" alt="..." />
                  <div className="infouser-nav me-3">
                    <h6>{localStorage.getItem("username")}</h6>
                    <p>+62 {localStorage.getItem('number')}</p>
                  </div>


                </Col>

              </Row>
            </Container>
                  <Dropdown className='Dropdown-History'>
                    <Dropdown.Toggle className='Dropdown-Toggle'>
                      <Icon icon="ei:bell" width="30" height="30" color='#4D4B57' className="mx-1 bell-navbar" id="dropdown-basic" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='shadow Dropdown-Menu'>
                      <Dropdown.Item>
                        <Card.Subtitle className="mb-3 text-muted"><h6>Today</h6></Card.Subtitle>

                        <Card className='TopUpInstruction-Comp m-2 mt-3 shadow'>
                          <Card.Body className='d-flex align-items-center'>
                            <div className='d-flex align-items-center'>
                              <Icon icon="akar-icons:arrow-down" color="green" width="25" height="25" className='' />
                              <div>
                                <Card.Subtitle className="mt-3 text-muted Text-Dropdown">Transfered from Joshua Lee</Card.Subtitle>
                                <p className='Text-Dropdown'>Rp 220.000</p>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>

                        <Card className='TopUpInstruction-Comp m-2 mt-3 shadow'>
                          <Card.Body className='d-flex align-items-center'>
                            <div className='d-flex align-items-center'>
                              <Icon icon="akar-icons:arrow-down" color="red" width="25" height="25" className='' />
                              <div>
                                <Card.Subtitle className="mt-3 text-muted Text-Dropdown">Netflix subscription</Card.Subtitle>
                                <p className='Text-Dropdown'>Rp 149.000</p>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>

                        <Card.Subtitle className="mb-3 mt-3 text-muted"><h6>This Week</h6></Card.Subtitle>

                        <Card className='TopUpInstruction-Comp m-2 mt-3 shadow'>
                          <Card.Body className='d-flex align-items-center'>
                            <div className='d-flex align-items-center'>
                              <Icon icon="akar-icons:arrow-up" color="red" width="25" height="25" className='' />
                              <div>
                                <Card.Subtitle className="mt-3 text-muted Text-Dropdown">Transfer to Jessica Lee</Card.Subtitle>
                                <p className='Text-Dropdown'>Rp 100.000</p>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>

                        <Card className='TopUpInstruction-Comp m-2 mt-3 shadow'>
                          <Card.Body className='d-flex align-items-center'>
                            <div className='d-flex align-items-center'>
                              <Icon icon="akar-icons:arrow-down" color="green" width="25" height="25" className='' />
                              <div>
                                <Card.Subtitle className="mt-3 text-muted Text-Dropdown">Top up from BNI E-Banking</Card.Subtitle>
                                <p className='Text-Dropdown'>Rp 300.000</p>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>



                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;