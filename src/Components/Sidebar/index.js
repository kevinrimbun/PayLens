import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Iconify
import { Icon } from "@iconify/react";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import '../../'

function Sidebar() {

    return (
        <Card className='border w-100 rounded shadow-lg Sidebar-Comp'>
            <Card.Body>
                <Container>
                    <Row className='d-flex flex-column justify-content-center align-items-center'>
                        <Col className='d-flex align-items-center'>
                            <Icon icon="akar-icons:dashboard" width="30" height="30" className=' m-3' />
                            <h5>Dasboard</h5>
                        </Col>
                        <Col className='d-flex align-items-center'>
                            <Icon icon="akar-icons:arrow-down" width="30" height="50" vFlip={true} className='m-3' />
                            <h5>Transfer</h5>
                        </Col>
                        <Col className='d-flex align-items-center'>
                            <Icon icon="akar-icons:plus" width="30" height="30" vFlip={true} className='m-3' />
                            <h5>Top Up</h5>
                        </Col>
                        <Col className='d-flex align-items-center'>
                            <Icon icon="gg:profile" width="30" height="30" className='m-3' />
                            <h5>Profile</h5>
                        </Col>
                        <Col className='d-flex align-items-center' fixed="bottom">
                            <Icon icon="material-symbols:logout-rounded" width="30" height="30" className='m-3' />
                            <h5>Log Out</h5>
                        </Col>

                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Sidebar;