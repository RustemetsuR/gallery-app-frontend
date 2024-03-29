import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../store/actions/userActions';
import '../Login/Login.css';
import FacebookLogin from '../../../components/FacebookLogin/FacebookLogin';

const Register = () => {
    const dispatch = useDispatch();

    const [registerData, setRegisterData] = useState({
        username: '',
        password: '',
        image: '',
        displayName: '',
    });

    const dataOnChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        const data = {
            ...registerData,
            [name]: value,
        };
        
        setRegisterData(data);
    }
    
    const registerSubmit = event => {
        event.preventDefault();
        let data;
        if (registerData.image === '') {
            data = {
                username: registerData.username,
                password: registerData.password,
                displayName: registerData.displayName,
            };
        }else{
            data = {
                username: registerData.username,
                password: registerData.password,
                displayName: registerData.displayName,
                avatarImage: registerData.image
            };
        };
        dispatch(register(data));
    };

    return (
        <div className='register-box user-sign-boxes'>
            <h2>Create your account</h2>
            <div>
                <form onSubmit={registerSubmit}>
                    <input placeholder='Username' name='username' onChange={dataOnChange} value={registerData.username} required />
                    <input placeholder='Password' name='password' type='password' onChange={dataOnChange} value={registerData.password} required />
                    <input placeholder='Image' name='image' onChange={dataOnChange} value={registerData.image} />
                    <input placeholder='Display Name' name='displayName' onChange={dataOnChange} value={registerData.displayName} />
                    <button type='submit'>Sign Up</button>
                </form>
                <FacebookLogin />
            </div>
        </div>
    );
};

export default Register;