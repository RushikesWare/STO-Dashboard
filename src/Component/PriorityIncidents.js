import React from 'react'
import BackNavigation from './BackNavigation'
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    useLocation,
  } from "react-router-dom";
import {
	useNavigate
} from 'react-router-dom';
import P2HighPriorityIncidents from './P2High-PriorityIncidents';
function PriorityIncidents() {
    const navigate = useNavigate();
    const location = useLocation();
    const applicationName= location.state?.headerName;
    console.log(applicationName);
    return (
        <div className='main-container'>
                            <BackNavigation></BackNavigation>
                            <P2HighPriorityIncidents/>
            <h1 style={{textAlign:'center'}}> Priority Incidents </h1>
            <Button variant="contained" className='guidelineBtn' onClick={() => navigate("/home/snapshot/Critical-PriorityP1")}>Critical Priority Incidents P1</Button>
            {/* <Button variant="contained" className='guidelineBtn' style={{marginLeft:'2%'}} onClick={() => navigate("/home/snapshot/High-PriorityP2")}>High-Priority Incidents P2</Button> */}
            <Button variant="contained" className='guidelineBtn' style={{marginLeft:'2%'}} onClick={() => navigate("/home/snapshot/IncidentGuideline")}>Incident Guideline</Button>

        </div>
    )
}

export default PriorityIncidents