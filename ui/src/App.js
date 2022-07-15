import './App.css';

import React ,{useState} from 'react'
import NavBar from './components/NavBar';
// import News from './components/News';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
import { Home } from './pages/Home';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import Health from './pages/Health';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Login from './pages/Login';
import Register from './pages/register';

const App = ()=> {
  
  const apiKey = process.env.key;
  const [country, setCountry]=useState('in');
  const [user, setUser]=useState(false);
 
    return (
      <div>
        <Router>
        <NavBar setCountry={setCountry} setUser={setUser} user={user}  /> 
      <Routes>
        <Route path="/" element={<Home apiKey={apiKey} country={country} />} />
        <Route path="/business" element={<Business apiKey={apiKey} country={country}/>} />
         <Route path="/entertainment" element={<Entertainment apiKey={apiKey} country={country}/>} />
       <Route path="/health" element={<Health apiKey={apiKey} country={country}/>} />
        <Route path="/science" element={<Science apiKey={apiKey} country={country}/>} />
        <Route path="/sports" element={<Sports apiKey={apiKey} country={country}/>} />
        <Route path="/technology" element={<Technology apiKey={apiKey} country={country}/>} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/logout" element={<Home apiKey={apiKey} country={country} user={user}/>} /> 
      </Routes>
        </Router>
      </div>
    )
 
}

export default App;