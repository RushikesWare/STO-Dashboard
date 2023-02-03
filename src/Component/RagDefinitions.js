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

function RagDefinitions() {
    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "Snapshot: RAG Definitions") {
                    return (
                        <div key={data.pageName}>
                            <BackNavigation></BackNavigation>
                            <h1 className='pageName'>{data.pageName}</h1>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>Availability</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragAvailabilityData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>Performance</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragPerformanceData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>Capacity</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragCapacityData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>Security</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragSecurityData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                            </Grid>
                            <hr />
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>P1/P2 Incidents</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragP1P2IncidentsData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>RCAs</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragRCAsData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>Risks</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragRisksData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>Issues</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragIssuesData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                            </Grid>
                            <hr />
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>PKEs</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragPKEsData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>App Patching</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragAppPatchingData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>OS Patching</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragOsPatchingData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>DB Patching</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragDBPatchingData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                            </Grid>
                            <hr />
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>Deployment Roadmap</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragPKEsData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>Health Checks</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragAppPatchingData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>L2/L3 Support</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragOsPatchingData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <table className='availblityTable'>
                                            <caption>EOL/EOS</caption>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}> {data.ragDefinitionHeading}</th>
                                                </tr>
                                                {data.ragDBPatchingData.map(mydata => {
                                                    return (
                                                        <tr key={mydata.color}>
                                                            <td><span className={mydata.color}></span></td>
                                                            <td >{mydata.description}</td>
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

export default RagDefinitions