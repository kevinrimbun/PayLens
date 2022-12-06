import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Chakra UI
import { PinInput, PinInputField } from '@chakra-ui/react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import '../../Styles/Pages/auth.css';
import "../../Styles/Pages/ChangePin/changepin.css"

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

const ChangePinAfter = () => {
    const navigate = useNavigate();

    const [newPin1, setNewPin1] = useState("");
    const [newPin2, setNewPin2] = useState("");
    const [newPin3, setNewPin3] = useState("");
    const [newPin4, setNewPin4] = useState("");
    const [newPin5, setNewPin5] = useState("");
    const [newPin6, setNewPin6] = useState("");
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPin1.length === 0 || newPin2.length === 0 || newPin3.length === 0 || newPin4.length === 0 || newPin5.length === 0 || newPin6.length === 0) {
            setError(true)
        } else if (newPin1 === localStorage.getItem("pin1") || newPin2 === localStorage.getItem("pin2") || newPin3 === localStorage.getItem("pin3") || newPin4 === localStorage.getItem("pin4") || newPin5 === localStorage.getItem("pin5") || newPin6 === localStorage.getItem("pin6")) {
            setError(true)
        } else {
            localStorage.setItem("pin1", newPin1)
            localStorage.setItem("pin2", newPin2)
            localStorage.setItem("pin3", newPin3)
            localStorage.setItem("pin4", newPin4)
            localStorage.setItem("pin5", newPin5)
            localStorage.setItem("pin6", newPin6)
            navigate('/profile', { replace: true })
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
                            <div className='subtitle-bottom-right'>
                                Type your new 6 digits security PIN to use <br /> in PayLens.
                            </div>

                        </div>

                        <div className='ChangePin-wrapper'>
                            <form onSubmit={handleSubmit}>
                                <PinInput className='d-flex pin-input' >
                                    <PinInputField className='pin-input text-center' name='pin1' onChange={(e) => setNewPin1(e.target.value)} />
                                    <PinInputField className='pin-input text-center' name='pin2' onChange={(e) => setNewPin2(e.target.value)} />
                                    <PinInputField className='pin-input text-center' name='pin3' onChange={(e) => setNewPin3(e.target.value)} />
                                    <PinInputField className='pin-input text-center' name='pin4' onChange={(e) => setNewPin4(e.target.value)} />
                                    <PinInputField className='pin-input text-center' name='pin5' onChange={(e) => setNewPin5(e.target.value)} />
                                    <PinInputField className='pin-input text-center' name='pin6' onChange={(e) => setNewPin6(e.target.value)} />
                                </PinInput>
                                <div className='error-message'>
                                    {error && newPin1.length === 0 && newPin2.length === 0 && newPin3.length === 0 && newPin4.length === 0 && newPin5.length === 0 && newPin6.length === 0 ?
                                        <label>Input cannot be empty !</label> : ""}
                                </div>
                                <div className='error-message'>
                                    {error && newPin1 === localStorage.getItem("pin1") && newPin2 === localStorage.getItem("pin2") && newPin3 === localStorage.getItem("pin3") && newPin4 === localStorage.getItem("pin4") && newPin5 === localStorage.getItem("pin5") && newPin6 === localStorage.getItem("pin6") ?
                                        <label>PIN must be different !</label> : ""}
                                </div>
                                <button className="btn-auth" id='submit' type="submit" value="Enter">Change Pin</button>
                            </form>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
    </>
}

export default ChangePinAfter