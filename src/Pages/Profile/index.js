import React, { useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { getDetailUserService } from "../../services/user";
import { profilePictureService, getProfilePicture } from "../../services/files"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Avatar from 'react-avatar';

// Iconify
import { Icon } from '@iconify/react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import ProfileButton from "../../Components/ProfileButton";
import Samuel from '../../Assets/account/samuelSuhi.svg'

// CSS
import '../../Styles/Pages/Profile/Profile.css'

const Profile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [image, setImage] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [fileId, setFileId] = useState(0);

    const [modal, setModal] = useState(false);
    const handleShow = () => setModal(true);
    const handleClose = () => setModal(false);

    const addPicture = async () => {
        const uuid = localStorage.getItem("fileId");
        const userId = localStorage.getItem("userId");

        const data = {
            image
        };
        console.log(data.image);

        const response = await profilePictureService(data, uuid, userId);
        console.log(response);
        if (response.status === 200) {
            toast.success(response.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        } else {
            toast.error(response.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPicture();
    }

    const getDetailUser = useCallback (async () => {
        const detailUserId = localStorage.getItem("detailUserId") ;
    
        const response = await getDetailUserService(detailUserId);
        console.log(response);
        const data = response.data.data;
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhoneNumber(data.phoneNumber);
    }, []);
  
    const getImage = useCallback (async () => {
        const uuid = localStorage.getItem("fileId");
        const response = await getProfilePicture(uuid);
        const data = response.data;
        console.log(data.image);
        setFileId(uuid);
  
        setImage(data);
    }, []);
  
    console.log(image);
    useEffect(() => {
      getDetailUser();
      getImage();
    }, [getDetailUser, getImage]);
    console.log(image);


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
        localStorage.removeItem("userId");
        localStorage.removeItem("fileId");
        localStorage.removeItem("balance");
        localStorage.removeItem("detailUserId");
        localStorage.removeItem("email");
        localStorage.removeItem("token");

        if (localStorage.getItem("userId") === null && localStorage.getItem("fileId") === null && localStorage.getItem("balance") === null && localStorage.getItem("detailUserId") === null && localStorage.getItem("email") === null && localStorage.getItem("token") === null) {
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

                        {image? (
                            <div className='m-0 p-0'>
                                <img src={`http://localhost:4000/paylens/backend/files/${fileId}`} className="ImgUser-Profile rounded" alt="Profile" />
                            </div>
                            ) : (
                            <div>
                                <Avatar facebookId="100008343750912" size={90} round="10px"/>
                            </div>
                        )}
                        <button className="file-input__show" for="file-input" onClick={handleShow}>
                            <span><Icon icon="ep:edit-pen" color="black" width="15" height="15"/>Edit</span>
                        </button>

                        <Modal show={modal} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Enter PIN to Transfer</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div className='input-wrapper'>
                                <input type="file" name='file' className="input-file form-control ms-3 me-2" onChange={(e) => setImage(e.target.files[0])} />
                                {/* <button onClick={(e) => handleSubmit(e)} type='submit' className="btn-editPhoto">Submit</button> */}
                            </div>
                        
                            </Modal.Body>
                            <Modal.Footer>
                            <Button
                                variant="outline-light"
                                // onClick={handleFailed}
                                className="m-2"
                                style={{ background: "#6379F4" }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="outline-light"
                                type='submit'
                                onClick={(e) => handleSubmit(e)}
                                className="m-2"
                                style={{ background: "#6379F4" }}
                            >
                                Submit
                            </Button>
                            </Modal.Footer>
                        </Modal>

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
            <ToastContainer
                position="bottom-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default Profile;
