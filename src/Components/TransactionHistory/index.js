import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import UserTranscation from "../../Components/User";

// CSS
import '../../Styles/Components/TransactionHistory/TransactionHistory.css'


function TransactionHistory() {
    // Data Users
    const listUsers = [
        {
            picture: "https://i.pravatar.cc/50?img=3",
            name: "Samuel Suhi",
            transaction: "Transfer",
            nominal: "+ Rp 50.000"
        },
        {
            picture: "https://i.pravatar.cc/50?img=4",
            name: "IntelliJ",
            transaction: "Subcription",
            nominal: "- Rp 80.000"
        },
        {
            picture: "https://i.pravatar.cc/50?img=1",
            name: "Christine Mar...",
            transaction: "Transfer",
            nominal: "+ Rp 90.000"
        },
        {
            picture: "https://i.pravatar.cc/50?img=2",
            name: "Netflix",
            transaction: "Subcription",
            nominal: "+ Rp 30.000"
        }

    ]

    return (
        <Card className='shadow-lg Transaction-Comp transaction-card'>
            <Card.Body className='transaction-wrapper '>
                <Container>

                    {/* Title Section */}
                    <Row className='Title-Section d-flex justify-content-center align-items-center'>
                        <Col className='transaction-title'>
                            <div>Transaction History</div>
                        </Col>
                        <Col>
                            <Link to='/history' className='Button-History float-end'>
                                <p>See All</p>
                            </Link>
                        </Col>
                    </Row>

                    {/* User Section */}
                    <Row className='User-Section'>
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