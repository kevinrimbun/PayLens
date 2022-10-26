import React from "react";

// Iconify
import { Icon } from '@iconify/react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import ProfileButton from "../../Components/ProfileButton";

// CSS
import '../../Styles/Pages/Profile/Profile.css'

const Profile = () => {
    // Data Button
    const listButtons = [
        {
            text: "Personal Information",
            icon: <Icon icon="akar-icons:arrow-right" color="#eee" width="25" height="25" />
        },
        {
            text: "Change Password",
            icon: <Icon icon="akar-icons:arrow-right" color="#eee" width="25" height="25" />
        },
        {
            text: "Change PIN",
            icon: <Icon icon="akar-icons:arrow-right" color="#eee" width="25" height="25" />
        },
        {
            text: "Logout",
            icon: ""
        },


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

                        {/* Profile Section */}
                        <Col sm={8} className="Profile-Section p-4 ms-3 border shadow-lg d-flex flex-column justify-content-center align-items-center">
                            <img src="https://i.pravatar.cc/100?img=3" className="ImgUser-Profile rounded" alt="Profile" />
                            <p className='mt-3 mb-3'><Icon icon="ep:edit-pen" color="#7A7886" width="20" height="20"/>Edit</p>
                            <h3 className='mt-1 mb-3'>Samuel Suhi</h3>
                            <h5 className='mb-4'>+62 859-5158-6501</h5>
                            {/* Button Profile Section */}
                            <Row className='ButtonProfile-Section'>
                                <Col className='d-flex flex-column'>
                                    {listButtons.map(button => {
                                        return (
                                            <ProfileButton text={button.text}
                                                icon={button.icon}
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

export default Profile;
