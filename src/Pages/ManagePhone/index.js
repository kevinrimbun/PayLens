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
import '../../Styles/Pages/ManagePhone/ManagePhone.css'

const ManagePhone = () => {

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
                        <Col sm={8} className="p-4 ms-3 shadow-lg d-flex flex-column ManagePhone-Section ">

                            <h3 className='mt-1 mb-3'>Manage Phone Number</h3>
                            <p className='mt-3 mb-4'>
                                You can only delete the phone number and then<br />
                                you must add another phone number.
                            </p>

                            <Row>
                                <Col className='d-flex flex-column'>
                                    <Card style={{ width: '100%' }} className='shadow mt-3 CardPhone'>
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2 text-muted">Phone Number</Card.Subtitle>
                                            <Card.Subtitle className="float-end Delete-Button">
                                                <Icon icon="heroicons:trash" width="30" height="30" />
                                            </Card.Subtitle>
                                            <Card.Text>
                                                <h5 className="Phone-User">
                                                    +62 {localStorage.getItem('number')}
                                                </h5>
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

export default ManagePhone;
