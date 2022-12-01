import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../Layout/Auth';
import '../../Styles/Pages/auth.css';
import { createPinService } from '../../services/auth';
import '../../Styles/Pages/CreatePin/CreatePin.css'


const CreatePin = () => {
    const[pin, setPin] = useState(new Array(6).fill(""))
    const navigate = useNavigate();

    const [error, setError] = useState(false);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
                
        setPin([...pin.map((d, idx) => (idx === index) ? element.value : d)]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }



    const createPin = async () => {
        const detailUserId = localStorage.getItem("detailUserId") ;
        const data = {
            pin: pin.join("")
        };

        const response = await createPinService(data, +detailUserId);
            console.log(response);
            if (response.status === 201) {
            alert(response.data.message);
            navigate("/success-pin", { replace: true })
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin[0] === null ) {
            setError(true)
        } 
        createPin();
        navigate('/success-pin',{ replace : true })
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

                {pin.map((data, index) => {
                    return (
                        <input
                            className='pin-field'
                            type="text"
                            name="pin"
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            onFocus={e => e.target.select()}
                        />
                    )
                })}

                <div className='error-message'>
                    {error && pin[0] === null ?
                    <label>Input cannot be empty !</label>:""}
                </div>
                <div className='form-pin'>
                    <button className="btn-auth btn-pin" id='submit' type="submit" value="Enter" >Confirm</button>
                </div>
            </form>
            <button className="btn-clear" value="Enter" onClick={e => setPin([...pin.map(v => "")])}>
                Clear
            </button>
        </div>

  </Auth>
}

export default CreatePin