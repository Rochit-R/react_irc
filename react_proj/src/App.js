import React from 'react';
// import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './componenets/Login Page';
import SignupForm from './componenets/Sign Up Page';
import LoginForm1 from './componenets/LoginPage1';
import Loading from './componenets/Loading';
import Home from './componenets/Home';
import Contact from './componenets/Contact';
import Header from './pages/Header/Header';
import About from '../src/componenets/About'
const HO=Loading(SignupForm);
const HO1=Loading(LoginForm);
const HO2=Loading(LoginForm1);
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path="/Login" element={<HO1/>} />
        <Route path="/SignUp" element={<HO/>}/>
        <Route path="/Login1" element={<HO2/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;