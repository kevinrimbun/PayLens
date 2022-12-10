import React from 'react';
import { Link } from 'react-router-dom'

// import css
import "../../Styles/Pages/LandingPage.css"

// import bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


// import gambar, icon

import profile1 from "../../Assets/1.svg"
import profile2 from "../../Assets/2.svg"
import wave from "../../Assets/wavephone.svg"
import phonee from "../../Assets/phonee.svg"
import phone2 from "../../Assets/phone2.svg"
import { AiFillApple, AiFillFacebook, AiFillLock, AiFillGithub, AiFillGooglePlusCircle, AiOutlineDownload, AiFillAndroid } from "react-icons/ai"
import { BsMicrosoft, BsTelephoneFill } from "react-icons/bs"


const LandingPage = () => {
    return (
        <div>
            <Container fluid className='landingpage'>
                {/* First */}
                <Container className='Wrapper pt-4'>
                    <Row className="align-items-center">
                        <Col>
                            <p className='logo'>PayLens</p>
                        </Col>
                        <Col>
                            <div className="logintab d-flex">
                                <Link to='/login'>
                                    <Button className='btn-login shadow'>Login</Button>
                                </Link>
                                <Link to='/register'>
                                    <Button className='btn-signup shadow'>Sign Up</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className='pt-4 downside'>
                        <Col className='leftside'>
                            <img src={wave} alt="" className='wave' />
                            <img src={phonee} alt="" className='phone' />
                        </Col>
                        <Col className='rightside'>

                            <h1>Awesome App <br /> For Saving  <span className='blue'>Time</span>. </h1>
                            <p>we bring you a mobile app banking for fix <br /> your any problem and struggle</p>
                            <Button className='try'>Try it for free</Button>
                            <p>Available on :</p>
                            <div>
                                <AiFillApple className="logos" />
                                <AiFillAndroid className="logos" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* merek */}
                <Row className='merk'>
                    <div className='text-center'>
                        <AiFillApple className="logos" />
                        <BsMicrosoft className="logos" />
                        <AiFillAndroid className="logos" />
                        <AiFillFacebook className="logos" />
                        <AiFillGithub className="logos" />
                        <AiFillGooglePlusCircle className="logos" />
                    </div>
                </Row>

                {/* About */}
                <Container className="text-center mt-5 about">
                    <Row>
                        <h2><span className='blue'>About</span> the Application.</h2>
                    </Row>
                    <Row className=" mt-4">
                        <p>we have some feature from the Application and it's totally free <br /> to use all user around the world</p>
                    </Row>
                    <Row className="d-flex mt-5 mb-5 pb-5 pt-3 row-cols-sm-3">
                        <Col>
                            <BsTelephoneFill className='logos mb-4 mt-4' />
                            <h4>24/7 Support</h4>
                            <p className='mb-4'>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                        </Col>
                        <Col className='mid'>
                            <AiFillLock className='logos mb-4 mt-4' />
                            <h4>Data Privacy</h4>
                            <p className='mb-4'>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                        </Col>
                        <Col>
                            <AiOutlineDownload className='logos mb-4 mt-4' />
                            <h4>Download</h4>
                            <p className='mb-4'>Zwallet is 100% totally free to use it's now available on Google Play Store and App Store.</p>
                        </Col>
                    </Row>
                </Container>

                {/* Feature */}
                <Row className='Wrapper-feature row-cols-md-1 row-cols-lg-2' >
                    <Col className='foto'>
                        <img src={phone2} alt="" className='phone' />
                    </Col>
                    <Col className='rightside-feature '>
                        <h1>All the <span className='blue'>Great</span> <br /> Paylens features . </h1>
                        <br />
                        <p className='mb-4 shadow feature-explanation'><span className='blue'>1.</span> Small fee <br /> We only charge 5% of every success transaction done in Paylens app.</p>
                        <br />
                        <p className='mb-4 shadow feature-explanation'><span className='blue'>2.</span> Data SecuredAll <br /> your data is secured properly in our system and it’s encrypted.</p>
                        <br />
                        <p className="shadow feature-explanation"><span className='blue'>3.</span> User Friendly <br /> Paylens come up with modern and sleek design and not complicated.</p>
                        <br />
                    </Col>
                </Row>

                {/* Carousel */}
                <Container className='text-center mt-5 mb-2 Wrapper-carousel'>
                    <Row>
                        <Col>
                            <h1>What users are <span className='blue'>Saying.</span></h1>
                            <p className='mb-5'>We have some great features from the application and it’s <br /> totally free to use by all users around the world.</p>
                        </Col>
                    </Row>
                    <Row className='row-carousel'>
                        <Col className='col-carousel'>
                            <Carousel className='Wrapper-carous'>
                                <Carousel.Item className="carousel">
                                    <img
                                        className="d-block"
                                        src={profile2}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Jessica Mira</h3>
                                        <p>“I use this app since 2 years ago and this is the best app <br /> that I’ve ever use in my entire life”</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carousel">
                                    <img
                                        className="d-block"
                                        src= "https://assets.teenvogue.com/photos/613b5fd248eda7f19679403c/1:1/w_354%2Cc_limit/1235152164"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Ariana chaw</h3>
                                        <p>“Since I’m using this app, I’m not going to move to another similar app. <br /> Thank you Paylens!!”</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carousel">
                                    <img
                                        className="d-block"
                                        src={profile1}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption className='description'>
                                        <h3>Robert Chandler</h3>
                                        <p>“I use PayLens to manage all financial needs. <br /> It’s super easy to use and it’s 100% free app”</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>

                </Container>

                {/* Copy Right */}
                <Row className='Wrapper-rights'>
                    <Col className='m-5'>
                        <h3>Paylens</h3>
                        <p>Simplify financial needs and saving much <br /> time in banking needs <br /> with one single app.</p>
                        <p>--------------------------</p>
                        <p>2022 PAYLENS</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default LandingPage