import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

// Iconify
import { Icon } from "@iconify/react";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import '../../Styles/Components/Sidebar/Sidebar.css'

function Sidebar() {
    const navigate = useNavigate()

    const deleteAll = (e) => {
        e.preventDefault();
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        if (localStorage.getItem("username") === '' && localStorage.getItem("email") === '' &&localStorage.getItem("password") === '') {
            navigate('/', { replace : true })
        }
    };

    return (
        <Card className='shadow-lg Sidebar-Comp'>
            <Card.Body>
                <Container>

                    {/* Sidebar Button */}
                    <Row className='d-flex flex-column justify-content-center align-items-center'>

                        <Col>
                            <Link to='/dashboard' className='d-flex align-items-center mt-4 Navigation-Section'>
                                <Icon icon="akar-icons:dashboard" width="30" height="30" className=' m-3' />
                                <h5>Dashboard</h5>
                            </Link>
                        </Col>

                        <Col>
                            <Link to='/transfer' className='d-flex align-items-center Navigation-Section'>
                                <Icon icon="akar-icons:arrow-down" width="30" height="50" vFlip={true} className='m-3' />
                                <h5>Transfer</h5>
                            </Link>
                        </Col>

                        <Col>
                            <Link to='/topup' className='d-flex align-items-center Navigation-Section'>
                                <Icon icon="akar-icons:plus" width="30" height="30" vFlip={true} className='m-3' />
                                <h5>Top Up</h5>
                            </Link>
                        </Col>

                        <Col>
                            <Link to='/profile' className='d-flex align-items-center Navigation-Section'>
                                <Icon icon="gg:profile" width="30" height="30" className='m-3' />
                                <h5>Profile</h5>
                            </Link>
                        </Col>

                        <Col>
                            <Link  onClick={(e) => deleteAll(e)} id="sticky-footer" className='d-flex align-items-center d-flex-shrink-0 py-4 Navigation-Section logout'>
                                <Icon icon="material-symbols:logout-rounded" width="30" height="30" className='m-3' />
                                <h5>Log Out</h5>
                            </Link>
                        </Col>

                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Sidebar;