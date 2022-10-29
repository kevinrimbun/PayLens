import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PinInput, PinInputField } from '@chakra-ui/react';
import '../../Styles/Pages/auth.css';
import Content from '../../Layout/Content';
import "../../Styles/Pages/ChangePin/changepin.css"

const ChangePinAfter = () => {
    const navigate = useNavigate();

    const [pin1, setInput1] = useState("");
    const [pin2, setInput2] = useState("");
    const [pin3, setInput3] = useState("");
    const [pin4, setInput4] = useState("");
    const [pin5, setInput5] = useState("");
    const [pin6, setInput6] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin1.length === 0 || pin2.length === 0 || pin3.length === 0 || pin4.length === 0 || pin5.length === 0 || pin6.length === 0) {
            setError(true)
        } else if ( pin1.length === 1 && pin2.length === 1 && pin3.length === 1 && pin4.length === 1 && pin5.length === 1 && pin6.length === 1) {
            alert("Change pin Success")
            // navigate("/success-pin", { replace: true })
        } else {
            setError(true)
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
                    <PinInputField className='pin-input text-center' name='pin1' onChange={(e) => setInput1(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin2' onChange={(e) => setInput2(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin3' onChange={(e) => setInput3(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin4' onChange={(e) => setInput4(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin5' onChange={(e) => setInput5(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin6' onChange={(e) => setInput6(e.target.value)} />
                </PinInput>
                <div className='error-message'>
                    {error && pin1.length === 0 && pin2.length === 0 && pin3.length === 0 && pin4.length === 0 && pin5.length === 0 && pin6.length === 0 ?
                    <label>Input cannot be empty !</label>:""}
                </div>
                <button className="btn-auth" id='submit' type="submit" value="Enter">Change Pin</button>
            </form>
        </div>

  </Content>
}

export default ChangePinAfter