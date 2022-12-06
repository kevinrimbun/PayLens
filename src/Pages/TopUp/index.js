import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import listAccount from "../../Data/account";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import TopUpInstruction from "../../Components/TopUp";

// CSS
import '../../Styles/Pages/TopUp/TopUp.css'
import { topUpService } from "../../services/topUp";
import { Input, PinInputField, PinInput } from "@chakra-ui/react";

const TopUp = () => {
    const [amount , setAmount] = useState("");
    const [pin , setPin] = useState("");
    const [userId , setUserId] = useState("");
    const [pin1, setInput1] = useState("");
    const [pin2, setInput2] = useState("");
    const [pin3, setInput3] = useState("");
    const [pin4, setInput4] = useState("");
    const [pin5, setInput5] = useState("");
    const [pin6, setInput6] = useState("");
    const [error, setError] = useState(false)

    const topUp = async () => {
        const userId = localStorage.getItem("userId") ;
        const data = {
            amount,
            pin: pin1 + pin2 + pin3 + pin4 + pin5 + pin6
        }
        const response = await topUpService(data, +userId);
        console.log(response);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        topUp();
        localStorage.setItem("pin1", pin1)
        localStorage.setItem("pin2", pin2)
        localStorage.setItem("pin3", pin3)
        localStorage.setItem("pin4", pin4)
        localStorage.setItem("pin5", pin5)
        localStorage.setItem("pin6", pin6)
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
            paragraph: "You can see your money in Paylens within 3 hours.",
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

                        {/* TopUp Section */}
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
                                <form onSubmit={handleSubmit}>
                                    <Col>
                                        <PinInput className='d-flex pin-input' >
                                            <PinInputField className='pin-input text-center' name='pin1' onChange={(e) => setInput1(e.target.value)} />
                                            <PinInputField className='pin-input text-center' name='pin2' onChange={(e) => setInput2(e.target.value)} />
                                            <PinInputField className='pin-input text-center' name='pin3' onChange={(e) => setInput3(e.target.value)} />
                                            <PinInputField className='pin-input text-center' name='pin4' onChange={(e) => setInput4(e.target.value)} />
                                            <PinInputField className='pin-input text-center' name='pin5' onChange={(e) => setInput5(e.target.value)} />
                                            <PinInputField className='pin-input text-center' name='pin6' onChange={(e) => setInput6(e.target.value)} />
                                        </PinInput>

                                        <div className='error-message'>
                                            {error && pin1.length === 0 && pin2.length === 0 && pin3.length === 0 && pin4.length === 0 && pin5.length === 0 && pin6.length === 0 ?
                                            <label>Input cannot be empty !</label>:""}
                                        </div>

                                        <input type="text" name="amount" id="amount" onChange={e => setAmount(e.target.value)}/>
                                        {/* <input type="text" name="pin" id="pin" onChange={e => setPin(e.target.value)}/> */}
                                    
                                        <div className='error-message'>
                                            {error && pin[0] === null ?
                                            <label>Input cannot be empty !</label>:""}
                                        </div>

                                            <button className="btn-auth" id='submit' type="submit" value="Enter" >Confirm</button>
                                    </Col>
                                </form>
                            </Row>
                            <Dropdown>
                                <Row className="ms-1">
                                    <Col>
                                        <h4>Top Up</h4>
                                    </Col>
                                    <Col className="text-end">
                                        <Dropdown.Toggle id="dropdown-basic" className="instructions-toggle" variant="Secondary">
                                            <h6 className="text-end">Instructions</h6>
                                        </Dropdown.Toggle>
                                    </Col>
                                </Row>

                                <Row className='User-Section'>
                                    <Col>
                                        <Dropdown.Menu className="instructions bg-transparent">
                                            {listParagraph.map(topup => {
                                                return (
                                                    <TopUpInstruction id={topup.id}
                                                        paragraph={topup.paragraph}
                                                    />
                                                )
                                            }
                                            )}
                                        </Dropdown.Menu>
                                    </Col>
                                </Row>
                            </Dropdown>

                            <form onSubmit={handleSubmit}>

                                <div className="add-amount">
                                    <Row className="d-flex flex-column justify-content-center align-content-center ms-1">
                                        <Col>
                                            <p>Enter nominal top up</p>
                                        </Col>
                                    </Row>

                                    <Row className="d-flex flex-column justify-content-center">
                                        <Col>
                                            <Form.Control id="amount" className="border-0" type="number" style={{ width: "150px" }}
                                                placeholder="Rp 0.00" name="amount" onChange={(e) => setAmount(e.target.value)} />
                                        </Col>
                                    </Row>
                                </div>

                                <div className=" btn-addamount">
                                    <Row className="d-flex flex-column justify-content-center">
                                        <Col>
                                            <Button type='submit' className="rounded-3 py-2 px-5" style={{ background: '#6379F4' }} >Continue</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default TopUp;
