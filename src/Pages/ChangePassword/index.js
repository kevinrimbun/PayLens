import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from '../../Layout/Content';
import Container from 'react-bootstrap/Container';
import "../../Styles/Pages/ChangePassword/changepassword.css";
import Button from 'react-bootstrap/Button';
import {AiFillLock,AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
const eye = <AiOutlineEye/>
const eyeClose = <AiOutlineEyeInvisible/>

const ChangePassword = () => {
  const navigate = useNavigate()
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== localStorage.getItem("password")) {
      setError(true)
    } else if (newPassword1 === localStorage.getItem("password")) {
      setError(true)
    } else if (newPassword2 !== newPassword1) {
      setError(true)
    } else {
      alert("Are you sure?")
      localStorage.setItem("password", newPassword2);
      navigate('/profile', {replace : true})
    }
    
  };


  return <Content className='changeP'>
            <Container className='title-changeP mt-5'>
            <h4>Change Password</h4>
            <p>You must enter your current password <br /> and then type your new password twice.</p>
            </Container>

            <div className="">
                <form onSubmit={handleSubmit}>
                  <Container className='text-center form-changeP mt-5'>
                      <div className="">
                      <AiFillLock/>
                      <input type={passwordShown1 ? "text" : "password"} style={{outlineStyle: 'none' }} placeholder='Input Current Password' onChange={(e) => setPassword(e.target.value)} secureTextEntry/>
                      <i onClick={togglePasswordVisiblity1}>{passwordShown1 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }</i>
                      </div>
                    <div className='error-message'>
                      {error && password !== localStorage.getItem("password") ?
                      <label>Password Invalid !</label>:""}
                    </div>
                  </Container>


                  <Container className='text-center form-changeP mt-5'>
                      <AiFillLock/>
                      <input type={passwordShown2 ? "text" : "password"} style={{outlineStyle: 'none' }} placeholder='Masukan Password Baru' onChange={(e) => setnewPassword1(e.target.value)}/>
                      <i onClick={togglePasswordVisiblity2}>{passwordShown2 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }</i>
                      <div className='error-message'>
                        {error && newPassword1 === localStorage.getItem("password") ?
                      <label>New Password must be different!</label>:""}
                    </div>
                  </Container>

                  <Container className='text-center form-changeP mt-5'>
                      <AiFillLock/>
                      <input type={passwordShown3 ? "text" : "password"} style={{outlineStyle: 'none' }} placeholder=' Masukan Password lagi' onChange={(e) => setnewPassword2(e.target.value)}/>
                      <i onClick={togglePasswordVisiblity3}>{passwordShown3 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }</i>
                      <div className='error-message'>
                        {error && newPassword2 !== newPassword1 ?
                      <label>New Password do not match!</label>:""}
                    </div>
                  </Container>

                  <Container className='text-center form-changeP mt-5'>
                      <Button variant="secondary" type='submit' value="Enter">Change Password</Button>
                      {/* <Modal2 buttonName='Change Password'></Modal2> */}
                      
                  </Container>
                </form>
            </div>
            
        </Content>
}

export default ChangePassword