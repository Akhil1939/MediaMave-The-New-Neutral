import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
// import News from './components/News';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
import { Home } from './pages/Home';
import Bussiness from './pages/Bussiness';
import Entertainment from './pages/Entertainment';
import Health from './pages/Health';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Login from './pages/Login';
import Register from './pages/register';

const App = ()=> {
  // const pageSize = 5;
  // const apiKey = "0f5bcd1c91354866a22117a901c670bc";
  // const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Bussiness />} />
         <Route path="/entertainment" element={<Entertainment />} />
       <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
      </Routes>
        {/* <Routes>
          <Route exact path="/" element= {<Home />}></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Routes> */}
        </Router>
      </div>
    )
 
}

export default App;