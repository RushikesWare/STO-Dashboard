import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'
import Button from '@mui/material/Button';
import {
	useNavigate
} from 'react-router-dom';
function PriorityIncidents() {
    const navigate = useNavigate();
    return (
        <div className='main-container'>
                            <BackNavigation></BackNavigation>

            <h1 style={{textAlign:'center'}}> Priority Incidents </h1>
            <Button variant="contained" className='guidelineBtn' onClick={() => navigate("/snapshot/Critical-PriorityP1")}>Critical Priority Incidents P1</Button>
            <Button variant="contained" className='guidelineBtn' style={{marginLeft:'2%'}} onClick={() => navigate("/snapshot/High-PriorityP2")}>High-Priority Incidents P2</Button>
            <Button variant="contained" className='guidelineBtn' style={{marginLeft:'2%'}} onClick={() => navigate("/snapshot/IncidentGuideline")}>Incident Guideline</Button>

        </div>
    )
}

export default PriorityIncidents