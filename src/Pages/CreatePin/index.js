import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../Layout/Auth';
import { PinInput, PinInputField } from '@chakra-ui/react';
import '../../Styles/Pages/auth.css';
import { createPinService } from '../../services/auth';
import '../../Styles/Pages/CreatePin/CreatePin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreatePin = () => {
    const[pin, setPin] = useState("")
    const navigate = useNavigate();
    const [pin1, setInput1] = useState("");
    const [pin2, setInput2] = useState("");
    const [pin3, setInput3] = useState("");
    const [pin4, setInput4] = useState("");
    const [pin5, setInput5] = useState("");
    const [pin6, setInput6] = useState("");

    const [error, setError] = useState(false);

    // const handleChange = (element, index) => {
    //     if (isNaN(element.value)) return false;
                
    //     setPin([...pin.map((d, idx) => (idx === index) ? element.value : d)]);

    //     if (element.nextSibling) {
    //         element.nextSibling.focus();
    //     }
    // }

    const createPin = async () => {
        const detailUserId = localStorage.getItem("detailUserId") ;
        const data = {
            pin: pin1 + pin2 + pin3 + pin4 + pin5 + pin6
        };

        const response = await createPinService(data, +detailUserId);
        console.log(response);
        if (response.status !== 201) {
            toast.error(response.data.errors.pin, {
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
            navigate('/success-pin', { replace : true })
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPin();
        navigate("/success-pin", { replace: true })
    }

    return <Auth>
        <div className='title-right-wrapper'>

            <div className='title-top-right'>
                Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself
            </div>
            <div className='subtitle-bottom-right'>
                Create 6 digits pin to secure all your money and your data in PayLens app. Keep it secret and don't tell anyone about your PayLens password and the PIN.
            </div>

        </div>

        <div className='pin-wrapper'>
            <form onSubmit={handleSubmit}>
                <PinInput className='d-flex pin-input' >
                    <PinInputField className='pin-input text-center' name='pin1' onChange={(e) => setInput1(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin2' onChange={(e) => setInput2(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin3' onChange={(e) => setInput3(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin4' onChange={(e) => setInput4(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin5' onChange={(e) => setInput5(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin6' onChange={(e) => setInput6(e.target.value)} />
                </PinInput>

                <button className="btn-auth" id='submit' type="submit" value="Enter" >Confirm</button>
            </form>
        </div>
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

  </Auth>
}

export default CreatePin