import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async() => {
   try {
    const response = await axios.post('http://127.0.0.1:8000/login',
    {
      username,
      password,
    });
    if(response.data.message === 'Login successful') {
        setLoginMessage('Login Successful!')
        navigate('/home');
    } else if (response.data.message === 'Login failed') {
        console.log('Login failed');
        setLoginMessage('Login Failed')
    }
   } catch(error) {
    console.log('Login Failed',error)
   }
  };

  return (
    <>
    <h1>Login Page</h1>
    <div className='login-container'>
      <h2>Login to Website</h2>
      <form onSubmit={(e) => {e.preventDefault(); handleLogin(); }}>
        <label>
          Username 
          <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label> 
          Password 
          <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type='submit'>
          Login
        </button>
      </form>
      {loginMessage && <p className='login-message'>{loginMessage}</p>}
      <p className='register-text'>
        Don't have ID right? <Link to="/register" style={{color:'red'}}>Register</Link>
      </p>
    </div>
    </>
  )
}

export default Login
