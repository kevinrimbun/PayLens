import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Iconify
import { Icon } from "@iconify/react";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import '../../Styles/Components/Balance/Balance.css'

function BalanceComp() {

    return (
        <Card className='shadow-lg Balance-Comp bg-primary'>
            <Card.Body>
                <Container fluid>

                    {/* Description Section */}
                    <Row className='d-flex justify-content-center'>
                        <Col className='d-flex flex-column justify-content-center Description-Section'>
                            <p className='text-start mt-1'>Balance</p>
                            <h4 className='text-start'>Rp 950.000</h4>
                            <p className='text-start mb-1'>+62 {localStorage.getItem('number')}</p>
                        </Col>

                        {/* Button Section */}
                        <Col className='d-flex flex-column justify-content-end Button-Section'>
                            <Link to='/transfer'>
                                <Button variant="outline-light" className='m-2 Button-Balance'>
                                    <Icon icon="akar-icons:arrow-down" vFlip={true} className='me-2' />
                                    Transfer
                                </Button>
                            </Link>
                            <Link to='/topup'>
                                <Button variant="outline-light" className='m-2 Button-Balance'>
                                    <Icon icon="akar-icons:plus" vFlip={true} className='me-2' />
                                    Top Up
                                </Button>
                            </Link>
                        </Col>

                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default BalanceComp;