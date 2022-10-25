import React, { useState } from 'react';

// Iconify
import { Icon } from "@iconify/react";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import '../../'

function Chart() {

    return (
        <Card className='border w-100 rounded shadow-lg Sidebar-Comp'>
            <Card.Body>
                <Container>

                    {/* Upper Section */}
                    <Row>
                        <Col className='d-flex flex-column'>
                            <Icon icon="akar-icons:arrow-up" color="green" width="30" height="30" vFlip={true} />
                            <p>Income</p>
                            <h4>Rp 8.500.000</h4>
                        </Col>
                        <Col className='d-flex flex-column'>
                            <Icon icon="akar-icons:arrow-up" color="red" width="30" height="30" />
                            <p>Expense</p>
                            <h4>Rp 3.400.000</h4>
                        </Col>
                    </Row>

                    {/* Lower Section */}

                </Container>
            </Card.Body>
        </Card>
    );
}

export default Chart;