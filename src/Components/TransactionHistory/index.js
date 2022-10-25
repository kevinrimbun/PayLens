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

// Components
import UserTranscation from "../../Components/User";

// CSS
import '../../'

function TransactionHistory() {
    const listUsers = [
        {
            picture: 1,
            name: "Kevin Rimbun",
            transaction: "Transfer",
            nominal: "+ Rp 50.000"
        },
        {
            picture: 2,
            name: "IntelliJ",
            transaction: "Subcription",
            nominal: "- Rp 80.000"
        },
        {
            picture: 3,
            name: "Aldy Fikhri",
            transaction: "Transfer",
            nominal: "+ Rp 90.000"
        },
        {
            picture: 4,
            name: "Disney+",
            transaction: "Subcription",
            nominal: "+ Rp 30.000"
        }

    ]

    return (
        <Card className='w-100 rounded shadow-lg Transaction-Comp'>
            <Card.Body>
                <Container>
                    <Row>
                        <Col><h6>Transaction History</h6></Col>
                        <Col><p>See All</p></Col>
                    </Row>
                    <Row>
                        <Col>
                            {listUsers.map(user => {
                                return (
                                    <UserTranscation picture={user.picture}
                                name={user.name}
                                transaction={user.transaction}
                                nominal={user.nominal} />
                                )
                            }
                            )}
                            
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default TransactionHistory;