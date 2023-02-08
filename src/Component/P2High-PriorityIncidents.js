import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'
import P2Chart from './P2Chart'
import AllInOneDashboardMock from '../json_server/AllInOneDashboardMock.json'

import {
    BrowserRouter as Router,
    useLocation,
  } from "react-router-dom";

function P2HighPriorityIncidents() {
    const location = useLocation();
    const applicationName= location.state?.headerName;
    console.log(applicationName);
    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "High-Priority Incidents (P2)") {
                    return (
                        <div key={data.pageName}>
                            {/* <BackNavigation></BackNavigation> */}
                            <h1 className='pageName'>{data.pageName}</h1>
                            <div className='ragStatus'>{data.ragHeading}
                                {/* <span className={data.ragStatusColor}></span> */}
                                {AllInOneDashboardMock && AllInOneDashboardMock[0].applications.map(allinonedata => {   
                       if(allinonedata['Application'] === applicationName) { 
                        return(<span className={!!allinonedata['Operational']['P1/P2 Incidents'] ? allinonedata['Operational']['P1/P2 Incidents'].toLowerCase() : 'greyEmtyStatus'}> </span>) 
                            }   } )}
                            </div>
                            <table className='availblityTable'>
                                <tbody>
                                    <tr>
                                        {
                                            data.priorityP2Heading.map((heading, index) => {
                                                return (<th key={index}>{heading}</th>)
                                            })
                                        }
                                    </tr>
                                    {data.priorityP2AnalysisData.map((mydata, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
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
                            <div className='defination  P2-RagTable'>
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
        </div>
    )
}

export default P2HighPriorityIncidents