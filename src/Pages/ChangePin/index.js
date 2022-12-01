import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Chakra UI
import { PinInput, PinInputField } from '@chakra-ui/react';

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import '../../Styles/Pages/auth.css';
import "../../Styles/Pages/ChangePin/changepin.css"

const ChangePin = () => {
    const navigate = useNavigate();

    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");
    const [pin6, setPin6] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin1.length === 0 && pin2.length === 0 && pin3.length === 0 && pin4.length === 0 && pin5.length === 0 && pin6.length === 0) {
            setError(true)
        } else if (pin1 !== localStorage.getItem("pin1") && pin2 !== localStorage.getItem("pin2") && pin3 !== localStorage.getItem("pin3") && pin4 !== localStorage.getItem("pin4") && pin5 !== localStorage.getItem("pin5") && pin6 !== localStorage.getItem("pin6")) {
            setError(true)
        } else {
            navigate('/new-pin', { replace: true })
        }
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
    }


    return <>
        {/* Navbar Section */}
        <NavbarComp />

        <div className="App w-100 p-1">
            <Container fluid className="w-100 p-5 Container-Section p-1">
                <Row>

                    {/* Sidebar Section */}
                    <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

                    {/* Profile Section */}
                    <Col sm={8} className="Profile-Section p-4 ms-3 shadow-lg d-flex flex-column justify-content-center align-items-center">
                        <div className='ChangePin-title text-center'>
                            <div className='title-top-right my-1'>
                                Change Pin
                            </div>
                            <div className='subtitle-bottom-right my-0'>
                                Enter your current 6 digits Paylens PIN <br /> below to continue to the next steps.
                            </div>
                        </div>

                        <div className='ChangePin-wrapper'>
                            <form onSubmit={handleSubmit}>
                                <PinInput className='d-flex pin-input' size='sm' >
                                    <PinInputField className='pin-input text-center' onChange={(e) => setPin1(e.target.value)} name='pin1' />
                                    <PinInputField className='pin-input text-center' onChange={(e) => setPin2(e.target.value)} name='pin2' />
                                    <PinInputField className='pin-input text-center' onChange={(e) => setPin3(e.target.value)} name='pin3' />
                                    <PinInputField className='pin-input text-center' onChange={(e) => setPin4(e.target.value)} name='pin4' />
                                    <PinInputField className='pin-input text-center' onChange={(e) => setPin5(e.target.value)} name='pin5' />
                                    <PinInputField className='pin-input text-center' onChange={(e) => setPin6(e.target.value)} name='pin6' />
                                </PinInput>
                                <div className='error-message'>
                                    {error && pin1.length === 0 && pin2.length === 0 && pin3.length === 0 && pin4.length === 0 && pin5.length === 0 && pin6.length === 0 ?
                                        <label>Input cannot be empty !</label> : ""}
                                </div>
                                <div className='error-message'>
                                    {error && pin1 !== localStorage.getItem("pin1") && pin2 !== localStorage.getItem("pin2") && pin3 !== localStorage.getItem("pin3") && pin4 !== localStorage.getItem("pin4") && pin5 !== localStorage.getItem("pin5") && pin6 !== localStorage.getItem("pin6") ?
                                        <label>PIN Invalid !</label> : ""}
                                </div>
                                <button className="btn-auth" id='submit' type="submit" value="Enter">Continue</button>
                            </form>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
    </>
}

export default ChangePin