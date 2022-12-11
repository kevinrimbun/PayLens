import React, { useState } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const [amount , setAmount] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount < 10000) {
            // alert("Nominal tidak boleh kurang dari 10 k")
            setError(true);
        }else{
            localStorage.setItem("amount", amount)
            navigate("/topup-confirmation", { replace: true })
        }
       
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

                            <form onSubmit={handleSubmit} className="">

                                <div className="add-amount d-flex flex-column justify-content-center align-items-center enter-section">
                                    <Row className="d-flex flex-column justify-content-center align-items-center ms-1">
                                        <Col>
                                            <p>Enter nominal top up</p>
                                        </Col>
                                    </Row>

                                    <Row className="d-flex flex-column justify-content-center align-items-center">
                                        <Col className="d-flex justify-content-center align-items-center me-5">
                                        <p className="ms-0">Rp.</p>
                                            <Form.Control id="amount" className="border-0 m-0" type="number" style={{ width: "150px" }}
                                                placeholder="0.00" name="amount" onChange={(e) => setAmount(e.target.value)} />
                                        </Col>
                                    </Row>
                                </div>
                                
                                <div className='error-message text-center'>
                                                {error ?
                                                <label>Minimum Top Up Amount is Rp 10.000,-</label>:""}
                                </div>
                                <div className=" btn-addamount">
                                <Row className="d-flex flex-column justify-content-center">
                                    <Col>
                                        <Button type='submit' className="rounded-3 py-2 px-5" style={{ background: '#6379F4' }}>Continue</Button>
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
