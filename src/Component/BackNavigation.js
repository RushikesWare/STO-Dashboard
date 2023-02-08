import React from 'react'
import {
    useNavigate
} from 'react-router-dom';
import svg from '../assets/icons/calendar-svgrepo-com.svg';

import Button from '@mui/material/Button';

function BackNavigation() {
    const navigate = useNavigate();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop:'20px' }}>
             
                <Button variant="contained" onClick={() => navigate(-1)}>Back</Button>
                {/* <img style={{width: '20px'}} src = {svg} alt="My Happy SVG"/> */}
                <input type="date" style={{width: '18px'}}/>
            </div>
            <hr></hr>
        </div>
    );
}

export default BackNavigation;