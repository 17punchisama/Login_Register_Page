import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            if (password != confirmPassword) {
                setRegisterMessage('Password do not match');
                return;
            }
            const response = await axios.post('http://127.0.0.1:8000/register', {
            username,
            password,
        });

        if (response.data.message === 'Register successful')
        {
            console.log('Register Successful');
            
            setRegisterMessage('Register Successful!');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
        
        } else if (response.data.message === 'Username already registered') {
            setRegisterMessage('Username already registered. Please use other username');
            //setRegisterMessage('Please use other username');
        }
        } catch(error) {
            console.log('error cant register',error);
        }
    }
  return (
    <div>
        <h1>Register</h1>
        <div className='register-container'>
            <h2>inpur your information to register</h2>
            <form onSubmit={handleRegister}>
            <label>
                Username
                <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                 />
                 <br />
                 Password
                 <input 
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} />
                 <br />
                 Confirm Password
                 <input 
                 type="password"
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <br />
            <button type='submit'>
                Register
            </button>
            </form>
            {registerMessage && <p className='register-message'>{registerMessage}</p>}
            {registerMessage === 'Register Successful!' && (
                <p className='back-to-text'>
                    Back to <Link to='/'>Login</Link>
                </p>
            )}
        </div>
    </div>
  )
}

export default Register