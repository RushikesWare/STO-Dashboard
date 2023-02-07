import './App.css';
import Layout from './Layout';
import Snapshot from './snapshot';
import React, { useState } from 'react'
import Availability from './Component/Availability';
import Performance from './Component/Performance';
import Capacity from './Component/Capacity';
import Security from './Component/Security';

import {
  BrowserRouter as Router,
  Routes,
  Route, Outlet
} from 'react-router-dom';
// import RiskAnalysis from './Component/RiskAnalysis';
// import Issues from './Component/Issues';
// import IssuesPrioGuidelines from './Component/IssuesPrioGuidelines';
// import RiskPrioGuidelines from './Component/RiskPrioGuideline';
// import RagDefinitions from './Component/RagDefinitions';
// import PriorityIncidents from './Component/PriorityIncidents';
// import HighPriorityIncidentsP2 from './Component/High-PriorityIncidentsP2';
// import IncidentGuideline from './Component/IncidentGuideline';
// import HighPriorityPKEs from './Component/HighPriorityPKEs';
// import RCAs from './Component/RCAs';
// import Navbar from './Component/Navbar';
// import Dashboard from './Component/Dashboard';
// import Login from './Login';
// import NoPageFound from './Component/NoPageFound';
// import AllInOneDashboard from './Component/AllInOneDashboard';
// import Settings from './Component/Settings';
// import Signout from './Component/Signout';

function Home() {
  let [changeLeftMargin, setchangeLeftMargin] = useState('0px')
  const changeBodyLeftMargin = (data) => {
    setchangeLeftMargin(data);
    // console.log(changeLeftMargin);
  }
  return (
  <>
      <Layout changeBodyLeftMargin={changeBodyLeftMargin} />
      <div style={{ marginLeft: changeLeftMargin ? '0px' : '170px' }} className='Body'>
        <Outlet/>
      </div>
      </>
  );
}

export default Home;
