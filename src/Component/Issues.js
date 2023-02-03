import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'
import Button from '@mui/material/Button';
import {
    useNavigate
} from 'react-router-dom';

function Issues() {
    const navigate = useNavigate();
    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "Issues") {
                    return (
                        <div key={data.pageName}>
                            <BackNavigation></BackNavigation>
                            <h1 className='pageName'>{data.pageName}</h1>
                            <div className='ragStatus'>{data.ragHeading}
                                <span className={data.ragStatusColor}></span>
                                <b>30%</b>
                            </div>
                            <table className='availblityTable'>
                                <tbody>
                                    <tr>
                                        {
                                            data.issueHeading.map(heading => {
                                                return (<th>{heading}</th>)
                                            })
                                        }
                                    </tr>
                                    {data.issueData.map(mydata => {
                                        return (
                                            <>
                                                <tr key={mydata.issueId}>
                                                    <td>{mydata.issueId}</td>
                                                    <td >{mydata.issueDescription}</td>
                                                    <td >{mydata.businessImpactDescription}</td>
                                                    <td >{mydata.Priority}</td>
                                                    <td >{mydata.Recommendation}</td>
                                                    <td >{mydata.nextActionAssignee}</td>
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
                            <Button variant="contained" className='guidelineBtn' onClick={() => navigate("/Issues-Guideline")}>Issue Prioritisation Guideline</Button>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Issues