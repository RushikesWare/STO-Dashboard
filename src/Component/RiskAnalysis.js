import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'
import Button from '@mui/material/Button';
import {
    useNavigate
} from 'react-router-dom';


function RiskAnalysis() {
    const navigate = useNavigate();

    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "Risk Analysis") {
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
                                            data.riskHeading.map(heading => {
                                                return (<th>{heading}</th>)
                                            })
                                        }
                                    </tr>                                
                                    {data.riskAnalysisData.map(mydata => {
                                        return (
                                            <>
                                                <tr key={mydata.riskId}>
                                                    <td>{mydata.riskId}</td>
                                                    <td >{mydata.description}</td>
                                                    <td >{mydata.idSource}</td>
                                                    <td >{mydata.likelihood}</td>
                                                    <td >{mydata.impact}</td>
                                                    <td >{mydata.priorityCode}</td>
                                                    <td >{mydata.priority}</td>
                                                    <td >{mydata.counterMeasures}</td>
                                                    <td >{mydata.riskMitigated}</td>
                                                    <td >{mydata.riskOwner}</td>
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
                            <Button variant="contained" className='guidelineBtn' onClick={() => navigate("/home/Risk-Guideline")}>Risk Prioritisation Guideline</Button>

                        </div>
                    )
                }
            })}
        </div>
    )
}

export default RiskAnalysis