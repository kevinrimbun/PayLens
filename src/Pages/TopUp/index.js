import React from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import TopUpInstruction from "../../Components/TopUp";

// CSS
import '../../Styles/Pages/TopUp/TopUp.css'

const TopUp = () => {
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
                            <h4>How To Top Up</h4>

                            <Row className='User-Section'>
                                <Col>
                                    {listParagraph.map(topup => {
                                        return (
                                            <TopUpInstruction id={topup.id}
                                                paragraph={topup.paragraph}
                                            />
                                        )
                                    }
                                    )}

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
