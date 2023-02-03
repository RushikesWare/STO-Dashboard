import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'

function HighPriorityPKEs() {
    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "High Priority PKEs") {
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
                                            data.PKEsHeading.map(heading => {
                                                return (<th>{heading}</th>)
                                            })
                                        }
                                    </tr>
                                    {data.PKEsData.map(mydata => {
                                        return (
                                            <>
                                                <tr key={mydata.PKENumber}>
                                                    <td>{mydata.problemId}</td>
                                                    <td >{mydata.problemDiagnosis}</td>
                                                    <td >{mydata.ageing}</td>
                                                    <td >{mydata.assignmentStatus}</td>
                                                    <td >{mydata.progressStatus}</td>
                                                    <td >{mydata.assignee}</td>
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

export default HighPriorityPKEs