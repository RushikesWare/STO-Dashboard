import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'

function HighPriorityIncidentsP2() {
    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "High-Priority Incidents (P2)") {
                    return (
                        <div key={data.pageName}>
                            <BackNavigation></BackNavigation>
                            <h1 className='pageName'>{data.pageName}</h1>
                            <div className='ragStatus'>{data.ragHeading}
                                <span className={data.ragStatusColor}></span>
                                <b>50%</b>
                            </div>
                            <table className='availblityTable'>
                                <tbody>
                                    <tr>
                                        {
                                            data.priorityP2Heading.map(heading => {
                                                return (<th>{heading}</th>)
                                            })
                                        }
                                    </tr>
                                    {data.priorityP2AnalysisData.map(mydata => {
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

        </div>
    )
}

export default HighPriorityIncidentsP2