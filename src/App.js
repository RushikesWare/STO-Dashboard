import './App.css';
import Snapshot from './snapshot';
import React, { useState } from 'react'
import Availability from './Component/Availability';
import Performance from './Component/Performance';
import Capacity from './Component/Capacity';
import Security from './Component/Security';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import RiskAnalysis from './Component/RiskAnalysis';
import Issues from './Component/Issues';
import IssuesPrioGuidelines from './Component/IssuesPrioGuidelines';
import RiskPrioGuidelines from './Component/RiskPrioGuideline';
import RagDefinitions from './Component/RagDefinitions';
import PriorityIncidents from './Component/PriorityIncidents';
import IncidentGuideline from './Component/IncidentGuideline';
import HighPriorityPKEs from './Component/HighPriorityPKEs';
import RCAs from './Component/RCAs';
import Navbar from './Component/Navbar';
import Dashboard from './Component/Dashboard';
import NoPageFound from './Component/NoPageFound';
import AllInOneDashboard from './Component/AllInOneDashboard';
import Settings from './Component/Settings';
import Signout from './Component/Signout';
import P1CriticalPriorityIncidents from './Component/P1CriticalPriorityIncidents';
import Login from './Login';
import Home from './Home';
import P2HighPriorityIncidents from './Component/P2High-PriorityIncidents';



function App() {
  let [changeLeftMargin, setchangeLeftMargin] = useState('0px')
  const changeBodyLeftMargin = (data) => {
    setchangeLeftMargin(data);
    // console.log(changeLeftMargin);
  }
  return (
    <Router>
      <div style={{ marginLeft: changeLeftMargin ? '0px' : '170px' }} className='Body'>
      <Navbar/>
        {/* <Routes>
          <Route exact path='/snapshot' element={< Snapshot />}></Route>
          <Route exact path='/allInOneDashboard' element={< AllInOneDashboard />}></Route>
          <Route exact path='/settings' element={< Settings />}></Route>
          <Route exact path='/signout' element={< Signout />}></Route>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route exact path='/snapshot/availability' element={< Availability />}></Route>
          <Route exact path='/snapshot/performance' element={< Performance />}></Route>
          <Route exact path='/snapshot/capacity' element={< Capacity />}></Route>
          <Route exact path='/snapshot/security' element={< Security />}></Route>
          <Route exact path='/snapshot/risks' element={< RiskAnalysis />}></Route>
          <Route exact path='/snapshot/Issues' element={< Issues />}></Route>
          <Route exact path='/Issues-Guideline' element={< IssuesPrioGuidelines />}></Route>
          <Route exact path='/Risk-Guideline' element={< RiskPrioGuidelines />}></Route>
          <Route exact path='/RAG-Definitions' element={< RagDefinitions />}></Route>
          <Route exact path='/snapshot/P1/P2 Incidents' element={< PriorityIncidents />}></Route>
          <Route exact path='/snapshot/High-PriorityP2' element={< HighPriorityIncidentsP2 />}></Route>
          <Route exact path='/snapshot/Critical-PriorityP1' element={< P1CriticalPriorityIncidents />}></Route>
          <Route exact path='/snapshot/IncidentGuideline' element={< IncidentGuideline />}></Route>
          <Route exact path='/snapshot/PKEs' element={< HighPriorityPKEs />}></Route>
          <Route exact path='/snapshot/RCAs' element={< RCAs />}></Route>      
          <Route exact path='*' element={<NoPageFound/>}></Route>
        </Routes> */}
         <Routes>
          <Route exact path='/' element={< Login />}></Route>
          <Route exact path="/home" element={< Home />}>
              <Route exact path='/home/snapshot' element={< Snapshot />}></Route>
              <Route exact path='/home/allInOneDashboard' element={< AllInOneDashboard />}></Route>
              <Route exact path='/home/settings' element={< Settings />}></Route>
              <Route exact path='/home/Dashboard' element={<Dashboard/>}></Route>
              <Route exact path='/home/snapshot/availability' element={< Availability />}></Route>
              <Route exact path='/home/snapshot/performance' element={< Performance />}></Route>
              <Route exact path='/home/snapshot/capacity' element={< Capacity />}></Route>
              <Route exact path='/home/snapshot/security' element={< Security />}></Route>
              <Route exact path='/home/snapshot/risks' element={< RiskAnalysis />}></Route>
              <Route exact path='/home/snapshot/Issues' element={< Issues />}></Route>
              <Route exact path='/home/Issues-Guideline' element={< IssuesPrioGuidelines />}></Route>
              <Route exact path='/home/Risk-Guideline' element={< RiskPrioGuidelines />}></Route>
              <Route exact path='/home/RAG-Definitions' element={< RagDefinitions />}></Route>
             
              <Route exact path='/home/snapshot/P1/P2 Incidents' element={< PriorityIncidents />}></Route>
              <Route exact path='/home/snapshot/High-PriorityP2' element={< P2HighPriorityIncidents />}></Route>
              <Route exact path='/home/snapshot/Critical-PriorityP1' element={< P1CriticalPriorityIncidents />}></Route>
            
              <Route exact path='/home/snapshot/IncidentGuideline' element={< IncidentGuideline />}></Route>
              <Route exact path='/home/snapshot/PKEs' element={< HighPriorityPKEs />}></Route>
              <Route exact path='/home/snapshot/RCAs' element={< RCAs />}></Route>
              <Route exact path='*' element={<NoPageFound/>}></Route>
           </Route>
           <Route exact path='/signout' element={< Signout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
