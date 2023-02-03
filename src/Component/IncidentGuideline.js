import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function IncidentGuideline() {
    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "Incident Prioritisation Guideline") {
                    return (
                        <div key={data.pageName}>
                            <BackNavigation></BackNavigation>
                            <h1 className='pageName'>{data.pageName}</h1>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>Incident Urgency</caption>
                                            <tbody>
                                                <tr>
                                                    {
                                                        data.incidentLikelihoodHeading.map(heading => {
                                                            return (<th>{heading}</th>)
                                                        })
                                                    }
                                                </tr>
                                                {data.incidentLikelihoodData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.likelihood}>
                                                            <td>{mydata.likelihood}</td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item><table className='availblityTable'>
                                        <caption>Incident Impact</caption>
                                        <tbody>
                                            <tr>
                                                {
                                                    data.incidentImpactHeading.map(heading => {
                                                        return (<th>{heading}</th>)
                                                    })
                                                }
                                            </tr>
                                            {data.incidentImpactData.map(mydata => {
                                                return (
                                                    <tr key={mydata.impact}>
                                                        <td>{mydata.impact}</td>
                                                        <td >{mydata.description}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table></Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item><table className='availblityTable'>
                                        <caption>Incident Matrix (Incident mapping)</caption>
                                        <tbody>
                                            <tr>
                                                {
                                                    data.incidentMatrixHeading.map(heading => {
                                                        return (<th>{heading}</th>)
                                                    })
                                                }
                                            </tr>
                                            {data.incidentMatrixData.map(mydata => {
                                                return (
                                                    <tr key={mydata.id}>
                                                        <td>{mydata.likelihood}</td>
                                                        <td >{mydata.impact}</td>
                                                        <td >{mydata.priorityCode}</td>
                                                        <td >{mydata.priorityDescription}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    </Item>
                                </Grid>
                            </Grid>



                        </div>
                    )
                }
            })}
        </div>
    )
}

export default IncidentGuideline