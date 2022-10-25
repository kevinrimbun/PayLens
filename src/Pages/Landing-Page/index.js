import React from 'react'

// import css
import "../../Styles/Pages/LandingPage.css"

// import bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


// import gambar, icon
import profile1 from  "../../Assets/1.svg"
import wave from "../../Assets/wave.svg"
import phonee from "../../Assets/phonee.svg"
import phone2 from "../../Assets/phone2.svg"
import {AiFillApple, AiFillFacebook,AiFillLock, AiFillAndroid, AiFillGithub, AiFillGooglePlusCircle, AiOutlineDownload} from "react-icons/ai"
import {BsMicrosoft, BsTelephoneFill} from "react-icons/bs"


const LandingPage = () => {
  return (
   <Container fluid>
    {/* First */}
    <Row className='Wrapper'>
        <Row className="align-items-center">
            <Col lg={5}>
                <p className='logo'>PayLens</p>
            </Col>
            <Col lg={7}>
                <div className="logintab">
                    <Button variant="outline-primary">Login</Button>
                    <Button variant="primary">Sign Up</Button>
                </div>
            </Col>
        </Row>
        <Col lg={5}>
            <img src={wave} alt="" className='wave' />
            <img src={phonee} alt="" className='phone'/>
        </Col>
        <Col lg={7} className='rightside'>
            
            <h1>Awesome App <br /> For Saving  <span className='blue'>Time</span>. </h1>
            <p>we bring you a mobile app banking for fix <br /> your any problem and struggle</p>
            <Button variant="primary" className='try'>Try it for free</Button>
            <p>Available on :</p>
            <div>
            <AiFillApple className="logos"/>
            <AiFillApple className="logos"/>
            </div>
        </Col>
    </Row>

    {/* merek */}
    <Row className='merk'>
        <div className='text-center'>
            <AiFillApple className="logos"/>
            <BsMicrosoft className="logos"/>
            <AiFillAndroid className="logos"/>
            <AiFillFacebook className="logos"/>
            <AiFillGithub className="logos"/>
            <AiFillGooglePlusCircle className="logos"/>
        </div>
    </Row>

    {/* About */}
    <Row className="text-center mt-5 d-flex about">
        <Row>
            <h2><span className='blue'>About</span> the Application.</h2>
        </Row>
        <Row className=" mt-4">
            <p>we have some feature from the Application and it's totally free <br /> to use all user around the world</p>
        </Row>
        <Row className="d-flex mt-5 mb-5 pb-5 pt-3">
            <Col>
                <BsTelephoneFill className='logos mb-4 mt-4'/>
                <h4>24/7 Support</h4>
                <p className='mb-4'>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
            </Col>
            <Col className='mid'>
                <AiFillLock className='logos mb-4 mt-4'/>
                <h4>Data Privacy</h4>
                <p className='mb-4'>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
            </Col>
            <Col>
                <AiOutlineDownload className='logos mb-4 mt-4'/>
                <h4>Download</h4>
                <p className='mb-4'>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
            </Col>
        </Row>
    </Row>

    {/* Feature */}
    <Row className='Wrapper-feature' >
        <Col lg={5}>
            <img src={wave} alt="" className='wave' />
            <img src={phone2} alt="" className='phone'/>
        </Col>
        <Col lg={7} className='rightside align-items-center'>
            <h1>All the <span className='blue'>Great</span> <br /> Paylens features . </h1>
            <p className='mb-4'><span className='blue'>1.</span> Small fee <br /> We only charge 5% of every success transaction done in Paylens app.</p>
            <p className='mb-4'><span className='blue'>2.</span> Data SecuredAll <br /> your data is secured properly in our system and it’s encrypted.</p>
            <p><span className='blue'>3.</span> User Friendly <br /> Paylens come up with modern and sleek design and not complicated.</p>
        </Col>
    </Row>

    {/* Carousel */}
    <Row className='text-center mt-5 mb-2 Wrapper'>
        <h1>What users are <span className='blue'>Saying.</span></h1>
        <p className='mb-5'>We have some great features from the application and it’s <br /> totally free to use by all users around the world.</p>
        <Carousel className='Wrapper-carous'>
            <Carousel.Item className="carousel">
                <img
                className="d-block"
                src={profile1}
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
                src={profile1}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Sherina chaw</h3>
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
                    <p>“I use Zwallet to manage all financial needs. <br /> It’s super easy to use and it’s 100% free app”</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Row>
    
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
    
  )
}

export default LandingPage