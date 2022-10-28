import React from "react";
import { Link } from "react-router-dom";

// Iconify
import { Icon } from '@iconify/react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

// CSS
import '../../Styles/Pages/PersonalInformation/PersonalInformation.css'

const PersonalInformation = () => {

    return (
        <>
            {/* Navbar Section */}
            <NavbarComp />

            <div className="App w-100 p-1">
                <Container fluid className="w-100 p-5 Container-Section p-1">
                    <Row>

                        {/* Sidebar Section */}
                        <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

                        {/* Title Section */}
                        <Col sm={8} className="p-4 ms-3 shadow-lg d-flex flex-column ">
                            <h3 className='mt-1 mb-3'>Personal Information</h3>
                            <p className='mt-3 mb-4'>
                                We got your personal information from the sign <br />
                                up proccess. If you want to make changes on <br />
                                your information, contact our support.
                            </p>
                            {/* Data User Section */}
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <Card style={{ width: '100%', border: 'none' }} className='shadow mt-3'>
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2 text-muted">First Name</Card.Subtitle>
                                            <Card.Text>
                                                <h5 className="Information-User">Robert</h5>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '100%', border: 'none' }} className='shadow mt-3'>
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2 text-muted">Last Name</Card.Subtitle>
                                            <Card.Text>
                                                <h5 className="Information-User">Chandler</h5>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '100%', border: 'none' }} className='shadow mt-3'>
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2 text-muted">Verified E-mail</Card.Subtitle>
                                            <Card.Text>
                                                <h5 className="Information-User">pewdiepie1@gmail.com</h5>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '100%', border: 'none' }} className='shadow mt-3'>
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2 text-muted">Phone Number</Card.Subtitle>
                                            <Link to='/managephonenum'>
                                                <Card.Subtitle className="text-primary float-end Manage-Button"><p>Manage</p></Card.Subtitle>
                                            </Link>
                                            <Card.Text>
                                                <h5 className="Information-User">+62 {localStorage.getItem('number')}</h5>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
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

export default PersonalInformation;
