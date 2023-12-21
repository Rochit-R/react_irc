import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

import '../assets/css/List.css';
const SignupForm = () => {
  function ShowPS(){
    var x=document.getElementById("pass");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}
  const [formData, setFormData] = useState({
    name: '',
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
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || password !== confirmPassword) {
      setError('Please fill in all fields and make sure passwords match.');
      return;
    }

    // Your signup logic here
    // ...
    // 
    // If successful, you can redirect or perform other actions
  };

  return (
    <div className="main">
      <div className="left">
        
      </div>
      <div className="right">
      <form name="Form1" method="post" action="#" onSubmit={handleSubmit}>
        <legend><b>Sign Up</b></legend>
      <fieldset>
        <div className="Sign">
          <TextField id="standard-basic" label="Name" variant="standard" placeholder="Enter your Name" required/>
        </div>
        <div className="Sign">
          <TextField id="standard-basic" label="Email" variant="standard" placeholder="Enter your Email" required/>
        </div>
        <div className="Sign">
        <TextField id="standard-basic" label="Password" variant="standard" placeholder="Enter your Password" required/>
        </div>
        <div className="Sign">
          <TextField id="standard-basic" label="Confirm Password" variant="standard" placeholder="Please Confirm your password" required/>
        </div>
        <div>
          {/* <div className="check"><input type="checkbox"  className="checkb"onClick={ShowPS}/>Show Password</div>
        {error && <p style={{ color: 'red' }}>{error}</p>}<br></br> */}
        <div className="but">
          <Link to="/">
        <button onclick="return funval()" type="submit" class="button button1">Sign Up</button></Link>
      </div>
        </div>
        </fieldset>
      </form></div>
      </div>
  );
};
{/* <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name"/> */}
export default SignupForm;