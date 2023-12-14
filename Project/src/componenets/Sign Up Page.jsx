import React, { useState } from 'react';
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
    <div>
      {/* <h2>Sign Up</h2> */}
      <center>
      <form onSubmit={handleSubmit}>
      <fieldset>
        <legend><b>Sign Up</b></legend>
        <table cellspacing="1" cellpading="1">
        <div>
            <tr>
            <ul>
          <td><label>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
          <td><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name"/></td>
          </ul>
          </tr>
        </div>
        <div>
          <tr>
            <ul>
          <td><label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
          <td><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"/></td>
          </ul>
          </tr>
        </div>
        <div>
          <tr>
            <ul>
        <td><label>Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
        <td><input id='pass' type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"/></td>
        </ul>
        </tr>
        </div>
        <div>
          <tr>
            <ul>
          <td><label>Confirm Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
          <td><input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          placeholder="Please confirm your password"/></td>
          </ul>
          </tr>
        </div>
        <div>
        <tr>
        <ul>
        <td><label for="number">PHONE NUMBER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
        <td><input type="text" id="number" name="phnber" placeholder="Phone Number"></input></td>
        </ul>
        </tr>
        </div>
        <div>
        <tr>
<ul>
<td><label for="DOB">DATE OF BIRTH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
<td><input type="date" id="DOB" name="BirthDate" placeholder="DOB"></input></td>
</ul>
</tr>
</div>
<div>
<tr>
<ul>
<td><label for="gender">GENDER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
<td><label for="man">GENTLEMAN</label>
<input type="radio" id="man" name="gender" value="male"></input>
<label for="woman">WOMAN</label>
<input type="radio" id="woman" name="gender" value="female"></input></td>
</ul>
</tr>
</div>
        <div>
          <tr> </tr>
        </div>
        <div>
          <tr>
          <div className="check"><input type="checkbox"  className="checkb"onClick={ShowPS}/>Show Password</div>
        {error && <p style={{ color: 'red' }}>{error}</p>}<br></br></tr>
        <tr>
        <td><button class="button button1">Sign Up</button></td>
        <td><button formAction="reset" class="button button2">Back</button></td>
        </tr>
        </div>
        </table>
        </fieldset>
      </form>
      </center>
    </div>
  );
};

export default SignupForm;