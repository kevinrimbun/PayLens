import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PinInput, PinInputField } from '@chakra-ui/react';
import '../../Styles/Pages/auth.css';
import Content from '../../Layout/Content';
import "../../Styles/Pages/ChangePin/changepin.css"

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
        } else {
            localStorage.setItem("pin1", newPin1)
            localStorage.setItem("pin2", newPin2)
            localStorage.setItem("pin3", newPin3)
            localStorage.setItem("pin4", newPin4)
            localStorage.setItem("pin5", newPin5)
            localStorage.setItem("pin6", newPin6)
            navigate('/profile', {replace : true})
        }
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
    }


    return <Content>
        <div className='ChangePin-title'>

            <div className='title-top-right'>
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
                    <label>Input cannot be empty !</label>:""}
                </div>
                <button className="btn-auth" id='submit' type="submit" value="Enter">Change Pin</button>
            </form>
        </div>

  </Content>
}

export default ChangePinAfter