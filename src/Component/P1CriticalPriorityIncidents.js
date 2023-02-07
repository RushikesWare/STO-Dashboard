import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'
import Button from '@mui/material/Button';
import {
	useNavigate
} from 'react-router-dom';
import P1Chart from './P1Chart';

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import P2Chart from './P2Chart';

function P1CriticalPriorityIncidents() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));

    const navigate = useNavigate();

  return (
    <div>
          <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "Critical Priority Incidents (P1)") {
                    return (
                        <div key={data.pageName}>
                            <BackNavigation></BackNavigation>
                            <h1 className='pageName'>{data.pageName}</h1>
                            <div className='ragStatus'>{data.ragHeading}
                                <span className={data.ragStatusColor}></span>
                            </div>
                            <table className='availblityTable'>
                                <tbody>
                                    <tr>
                                        {
                                            data.criticalPriorityP1Heading.map(heading => {
                                                return (<th>{heading}</th>)
                                            })
                                        }
                                    </tr>
                                    {data.criticalPriorityP1AnalysisData.map(mydata => {
                                        return (
                                            <>
                                                <tr key={mydata.incidentId}>
                                                    <td>{mydata.incidentId}</td>
                                                    <td >{mydata.urgency}</td>
                                                    <td >{mydata.impact}</td>
                                                    <td >{mydata.priority}</td>
                                                    <td >{mydata.description}</td>
                                                    <td >{mydata.date}</td>
                                                    <td >{mydata.frequency}</td>
                                                    <td >{mydata.duration}</td>
                                                </tr>
                                            </>
                                        )
                                    })}

                                </tbody>
                            </table>
                            <div className='defination'>
                                <table className='availblityTable'>
                                    <tbody key={data.ragDefinition.Red.id}>
                                        <tr>
                                            <th>{data.ragHeading}</th>
                                            <th>{data.defHeading}</th>
                                        </tr>
                                        <tr>
                                            <td><span className={data.ragDefinition.Red.color}></span></td>
                                            <td>{data.ragDefinition.Red.definition}</td>
                                        </tr>
                                        <tr>
                                            <td> <span className={data.ragDefinition.Yellow.color}></span></td>
                                            <td>{data.ragDefinition.Yellow.definition}</td>
                                        </tr>
                                        <tr>
                                            <td> <span className={data.ragDefinition.Green.color}></span></td>
                                            <td>{data.ragDefinition.Green.definition}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                }
            })}
            <div className='chart'>
                <P2Chart/>
            </div>
            <Button variant="contained" className='guidelineBtn' style={{marginLeft:'2%'}} onClick={() => navigate("/snapshot/IncidentGuideline")}>Incident Guideline</Button>

        </div>
    </div>
    
  )
}

export default P1CriticalPriorityIncidents