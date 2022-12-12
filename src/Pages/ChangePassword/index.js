import React, { useEffect, useState } from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import "../../Styles/Pages/ChangePassword/changepassword.css";

// React Icon
import { AiFillLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import { changePasswordService } from '../../services/changePassword';

const eye = <AiOutlineEye />
const eyeClose = <AiOutlineEyeInvisible />

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword1, setnewPassword1] = useState("");
  const [newPassword2, setnewPassword2] = useState("");
  const [error, setError] = useState(false)
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [passwordShown3, setPasswordShown3] = useState(false);

  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };

  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };

  const togglePasswordVisiblity3 = () => {
    setPasswordShown3(passwordShown3 ? false : true);
  };

  const changePassword = async () => {
    const userId =localStorage.getItem("userId");
    const data ={
        oldPassword: password,
        newPassword:newPassword1
    }
    const response = await changePasswordService(data,userId);
    if (response !== 200) {
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
    changePassword();

    // if (newPassword1 === password) {
    //   setError(true)
    // } else if (newPassword2 !== newPassword1) {
    //   setError(true)
    // } else {
    //   alert("Are you sure?")
    //   changePassword();
    //   // navigate('/dashboard')
    //   // localStorage.setItem("password", newPassword2);
    // }

  };


  return <>
    {/* Navbar Section */}
    <NavbarComp />

    <div className="App w-100 p-1">
      <Container fluid className="w-100 p-5 Container-Section p-1">
        <Row>

          {/* Sidebar Section */}
          <Col sm={3} className="Sidebar-Section p-1"><Sidebar /></Col>

          {/* Profile Section */}
          <Col sm={8} className="Profile-Section p-4 ms-3 shadow-lg d-flex flex-column justify-content-center align-items-center changeP">
            <Container className='title-changeP mt-5 text-center'>
              <h4>Change Password</h4>
              <p>You must enter your current password <br /> and then type your new password twice.</p>
            </Container>

            <div className="w-100">
              <form onSubmit={handleSubmit}>
                <Container className='text-center form-changeP mt-5'>
                  <div className="">
                    <AiFillLock className="me-2"/>
                    <input type={passwordShown1 ? "text" : "password"} style={{ outlineStyle: 'none' }} placeholder='Input Current Password' onChange={(e) => setPassword(e.target.value)} secureTextEntry />
                    <i className="ms-2" onClick={togglePasswordVisiblity1}>{passwordShown1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</i>
                  </div>
                </Container>


                <Container className='text-center form-changeP mt-5'>
                  <AiFillLock className="me-2"/>
                  <input type={passwordShown2 ? "text" : "password"} style={{ outlineStyle: 'none' }} placeholder='Masukan Password Baru' onChange={(e) => setnewPassword1(e.target.value)} />
                  <i className="ms-2" onClick={togglePasswordVisiblity2}>{passwordShown2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</i>
                  <div className='error-message'>
                    {error && newPassword1 === localStorage.getItem("password") ?
                      <label>New Password must be different!</label> : ""}
                  </div>
                </Container>

                <Container className='text-center form-changeP mt-5'>
                  <AiFillLock className="me-2"/>
                  <input type={passwordShown3 ? "text" : "password"} style={{ outlineStyle: 'none' }} placeholder=' Masukan Password lagi' onChange={(e) => setnewPassword2(e.target.value)} />
                  <i className="ms-2" onClick={togglePasswordVisiblity3}>{passwordShown3 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</i>
                  <div className='error-message'>
                    {error && newPassword2 !== newPassword1 ?
                      <label>New Password do not match!</label> : ""}
                  </div>
                </Container>

                <Container className='text-center form-changeP mt-5'>
                  <Button variant="secondary" type='submit' value="Enter">Change Password</Button>
                  {/* <Modal2 buttonName='Change Password'></Modal2> */}

                </Container>
              </form>
            </div>
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

}

export default ChangePassword