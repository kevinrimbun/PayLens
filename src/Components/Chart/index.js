import React, { useState } from 'react';

// Iconify
import { Icon } from "@iconify/react";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import '../../Styles/Components/Chart/Chart.css'

// Assets
import ChartPic from '../../Assets/graphic.svg'

function Chart() {
    
    localStorage.setItem("balance", 0)
    var TopAmount = localStorage.getItem("TopAmount")
    var amount = localStorage.getItem("amount")
    var balance = localStorage.getItem("balance")
    const resultIncome = balance + TopAmount
    const resultExpense = balance - amount

    return (
        <Card className='shadow-lg Chart-Comp'>
            <Card.Body>
                <Container>

                    {/* Upper Section */}
                    <Row>
                        <Col className='d-flex flex-column'>
                            <Icon icon="akar-icons:arrow-up" color="green" width="30" height="30" vFlip={true} />
                            <p>Income</p>
                            <h4>Rp {resultIncome}</h4>
                        </Col>
                        <Col className='d-flex flex-column float-end'>
                            <Icon icon="akar-icons:arrow-up" color="red" width="30" height="30" className='float-end ms-5'/>
                            <p className='float-end ms-5'>Expense</p>
                            <h4 className='float-end ms-5'>Rp {resultExpense}</h4>
                        </Col>
                    </Row>

                    {/* Lower Section */}
                    <div className='img-chart d-flex justify-content-center align-items-center mt-5 mb-4'>
                        <img src={ChartPic} className="rounded" alt="Chart" />
                    </div>

                </Container>
            </Card.Body>
        </Card>
    );
}

export default Chart;