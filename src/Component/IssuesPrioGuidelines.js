import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'

function IssuesPrioGuidelines() {
    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "Issue Prioritisation Guideline") {
                    return (
                        <div key={data.pageName}>
                            <BackNavigation></BackNavigation>
                            <h1 className='pageName'>{data.pageName}</h1>
                            <table className='availblityTable'>
                            <caption>Issue Priority Code</caption>
                                <tbody>
                                    <tr>                               
                                        {
                                            data.guidelineHeading.map(heading => {
                                                return (<th>{heading}</th>)
                                            })
                                        }
                                    </tr>
                                    {data.guidelineData.map(mydata => {
                                        return (
                                            <tr key={mydata.priorityCode}>
                                                <td>{mydata.priorityCode}</td>
                                                <td >{mydata.description}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default IssuesPrioGuidelines