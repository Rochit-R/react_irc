import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

// import * a s React from 'react';
// import Box from '@mui/material/Box';
import '../assets/css/List1.css';
// import TextField from '@mui/material/TextField';
// import { useHistory } from 'react-router-dom';
const LoginForm1 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const { email, password, confirmPassword } = formData;
    if (!email || !password || password !== confirmPassword) {
      setError('Please fill in all fields and make sure passwords match.');
      return;
    }
  };
  return (
    <div className="main">
    <div className="left">

    </div>
      <div className="right">
      <form onSubmit={handleSubmit} className='back'>
        <fieldset>
            <legend ><b>Login</b></legend>
        <div className="Sign">
          <TextField id="standard-basic" label="Name" variant="standard" placeholder="Enter your Name" required/>
        </div>
        <div className="Sign">
          <TextField id="standard-basic" label="Email" variant="standard" placeholder="Enter your Email" required/>
        </div>
        <div className="Sign">
          <TextField id="standard-basic" label="Password" variant="standard" placeholder="Enter your Password" required/>
        </div>
          <div className="butt">
          <Link to="/">
        <button class="button button1">Login</button></Link>
        </div>
        </fieldset>
      </form>
      </div>
    </div>
  );
};

export default LoginForm1;