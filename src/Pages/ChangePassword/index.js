import React, { useEffect, useState } from 'react'
import Content from '../../Layout/Content'
import Container from 'react-bootstrap/Container';
import "../../Styles/Pages/ChangePassword/changepassword.css";
import {AiFillLock,AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import Button from 'react-bootstrap/Button';
const eye = <AiOutlineEye/>
const eyeClose = <AiOutlineEyeInvisible/>

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword1, setnewPassword1] = useState("");
  const [newPassword2, setnewPassword2] = useState("");
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [passwordShown3, setPasswordShown3] = useState(false);
  const [hide , setHide] = useState("");

  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };

  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };

  const togglePasswordVisiblity3 = () => {
    setPasswordShown3(passwordShown3 ? false : true);
  };

  const passwordChange1 = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const passwordChange2 = (e) => {
    e.preventDefault();
    setnewPassword1(e.target.value);
  };

  const passwordChange3 = (e) => {
    e.preventDefault();
    setnewPassword2(e.target.value);
  };

  const checkUser = (e) => {
    e.preventDefault();
    if (newPassword1.length !== 0 || password.length !== 0 ){
        if (password === "kevin1234") {
            if (newPassword1 === newPassword2) {
              alert("Success!");
            } else {
              alert("Password tidak sama, silahkan ulangi!");
            }
          } else {
            alert("password lama salah silahkan ulangi");
          }
    }else{
        alert("password kosong silahkan ulangi")
    }
    
  };


  return <Content className='changeP'>
            <Container className='title-changeP mt-5'>
            <h4>Change Password</h4>
            <p>You must enter your current password <br /> and then type your new password twice.</p>
            </Container>

            <div className="">
                <form>
                <Container className='text-center form-changeP mt-5'>
                    <div className="">
                    <AiFillLock/>
                    <input type={passwordShown1 ? "text" : "password"} style={{outlineStyle: 'none' }} placeholder='Masukan Password lama' onChange={(e) => passwordChange1(e)} secureTextEntry/>
                    <i onClick={togglePasswordVisiblity1}>{passwordShown1 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }</i>
                    </div>
                </Container>

                <Container className='text-center form-changeP mt-5'>
                    <AiFillLock/>
                    <input type={passwordShown2 ? "text" : "password"} style={{outlineStyle: 'none' }} placeholder='Masukan Password Baru' onChange={(e) => passwordChange2(e)}/>
                    <i onClick={togglePasswordVisiblity2}>{passwordShown2 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }</i>
                </Container>

                <Container className='text-center form-changeP mt-5'>
                    <AiFillLock/>
                    <input type={passwordShown3 ? "text" : "password"} style={{outlineStyle: 'none' }} placeholder=' Masukan Password lagi' onChange={(e) => passwordChange3(e)}/>
                    <i onClick={togglePasswordVisiblity3}>{passwordShown3 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }</i>
                </Container>

                <Container className='text-center form-changeP mt-5'>
                    <Button variant="secondary" type='submit' value="Enter" onClick={(e) => checkUser(e)}>Change Password</Button>
                    
                </Container>
                </form>
            </div>
            
        </Content>
}

export default ChangePassword