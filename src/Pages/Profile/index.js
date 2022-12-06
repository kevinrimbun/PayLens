import React, { useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { getDetailUserService } from "../../services/user";
import Avatar from 'react-avatar';

// Iconify
import { Icon } from '@iconify/react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import ProfileButton from "../../Components/ProfileButton";

// CSS
import '../../Styles/Pages/Profile/Profile.css'

const Profile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const getDetailUser = useCallback (async () => {
      const detailUserId = localStorage.getItem("detailUserId") ;
  
      const response = await getDetailUserService(detailUserId);
      console.log(response);
      const data = response.data.data;
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhoneNumber(data.phoneNumber);
    }, []);
  
    useEffect(() => {
      getDetailUser();
    }, [getDetailUser]);
    // Data Button
    const listButtons = [
        {
            text: "Personal Information",
            icon: <Icon icon="akar-icons:arrow-right" color="#4D4B57" width="25" height="25" />,
            link: "/information"
        },
        {
            text: "Change Password",
            icon: <Icon icon="akar-icons:arrow-right" color="#4D4B57" width="25" height="25" />,
            link: '/change-password'
        },
        {
            text: "Change PIN",
            icon: <Icon icon="akar-icons:arrow-right" color="#4D4B57" width="25" height="25" />,
            link: '/change-pin'
        }
    ]

    const navigate = useNavigate();
    
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("number");
        console.log(localStorage.getItem("username"))
        if (localStorage.getItem("username") === null && localStorage.getItem("email") === null && localStorage.getItem("password") === null) {
            navigate("/", { replace: true })
        }
    }

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
                        <Col sm={8} className="Profile-Section p-4 ms-3 shadow-lg d-flex flex-column justify-content-center align-items-center">
                            {/* <img src="https://i.pravatar.cc/100?img=3" className="ImgUser-Profile rounded" alt="Profile" /> */}
                            <Avatar facebookId="100008343750912" size={90} round="10px"/>
                            <p className='mt-3 mb-3'><Icon icon="ep:edit-pen" color="#7A7886" width="20" height="20" />Edit</p>
                            <h4 className='mt-1 mb-3'>{firstName} {lastName}</h4>
                            <h5 className='mb-4'>{phoneNumber}</h5>
                            {/* Button Profile Section */}
                            <Row className='ButtonProfile-Section'>
                                <Col className='d-flex flex-column'>

                                    {listButtons.map(button => {
                                        return (
                                            <ProfileButton
                                            text={button.text}
                                            icon={button.icon}
                                            link={button.link}
                                            />
                                        )
                                    }
                                    )}
                                    <Link to='/change-password' onClick={logout}>
                                        <Button className='mt-3 ProfileButton d-flex align-items-center justify-content-between'>
                                            <span className='float-start'>Logout</span>
                                        </Button>
                                    </Link>
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
