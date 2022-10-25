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
import '../../'

function BalanceComp() {

    return (
        <Card className=' w-100 rounded shadow-lg Balance-Comp'>
            <Card.Body>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex flex-column align-items-center'>
                            <p>Balance</p>
                            <h4>Rp 950.000</h4>
                            <p>+62 859 - 5158 - 6501</p>
                        </Col>
                        <Col className='d-flex flex-column align-items-center'>

                            <Button variant="outline-warning" className='m-2'>
                                <Icon icon="akar-icons:arrow-down" vFlip={true} className='me-2' />Transfer</Button>
                            <Button variant="outline-warning" className='m-2'>
                                <Icon icon="akar-icons:plus" vFlip={true} className='me-2' />Top Up</Button>
                        </Col>

                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default BalanceComp;