import React, { useState } from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import TopUpInstruction from "../../Components/TopUp";

// CSS
import '../../Styles/Pages/TopUp/TopUp.css'
import { topUpService } from "../../services/topUp";
import { Input } from "@chakra-ui/react";

const TopUp = () => {
    const [amount , setAmount] = useState("");
    const [pin , setPin] = useState("");
    const [userId , setUserId] = useState("");

    const topUp = async () => {
        const userid = {userId}
        const data = {
            amount,
            pin
        }
        const response = await topUpService(data);
        console.log(response);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        topUp();
    }

    // Data Users
    const listParagraph = [
        {
            id: 1,
            paragraph: "Go to the nearest ATM or you can use E-Banking.",
        },
        {
            id: 2,
            paragraph: "Type your security number on the ATM or E-Banking.",
        },
        {
            id: 3,
            paragraph: "Select “Transfer” in the menu.",
        },
        {
            id: 4,
            paragraph: "Type the virtual account number that we provide you at the top.",
        },
        {
            id: 5,
            paragraph: "Type the amount of the money you want to top up.",
        },
        {
            id: 6,
            paragraph: "Read the summary details.",
        },
        {
            id: 7,
            paragraph: "Press transfer / top up.",
        },
        {
            id: 8,
            paragraph: "You can see your money in Zwallet within 3 hours.",
        }

    ]

    return (
        <>

            {/* Navbar Section */}
            <NavbarComp />
                
            <div className="App w-100 p-1">
                <Container fluid className="w-100 p-5 Container-Section p-1">
                    <Row>

                        {/* Sidebar Section */}
                        <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

                        {/* History Section */}
                        <Col sm={8} className="Topup-Section p-4 ms-3 shadow-lg">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                How to Top Up
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">{listParagraph.map(topup => {
                                    return (
                                    <TopUpInstruction id={topup.id}
                                        paragraph={topup.paragraph}
                                        />
                                        )
                                    }
                                )}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                            <Row className='User-Section'>
                                <Col>
                                <input type="text" name="amount" id="amount" onChange={e => setAmount(e.target.value)}/>
                                <button onClick={(e) => handleSubmit(e)}>SEND</button>
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

export default TopUp;
