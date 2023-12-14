import React, { useState } from 'react';
import '../assets/css/List.css';
// import { useHistory } from 'react-router-dom';
const LoginForm = () => {
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

    // Your login logic here
    // For demonstration, let's assume the login is successful
    // Replace the following line with your actual login logic
    
  };
  return (
    <div className='container'>
    <center>
      <form onSubmit={handleSubmit} className='back'>
        <fieldset>
            <legend ><b>Login</b></legend>
        <table cellspacing="1" cellpading="1">
        <div>
            <tr>
            <ul>
          <td><label>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
          <td><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"/></td>
          </ul>
          </tr>
        </div>
        <div>
            <tr>
            <ul>
          <td><label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
          <td><input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"/></td>
            </ul>
            </tr>
        </div>
        <div>
            <tr>
                <ul>
          <td><label>Confirm Password&nbsp;&nbsp;&nbsp;</label></td>
          <td><input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          placeholder="Please confirm your password"/></td>
          </ul>
          </tr>
        </div>
        <tr>
            <ul>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
        <td><button class="button button1">Login</button></td>
        <td><button type="reset" class="button button2">Back</button></td>
        </ul>
        </tr>
        </table>
        </fieldset>
      </form>
        </center>
    </div>
  );
};

export default LoginForm;