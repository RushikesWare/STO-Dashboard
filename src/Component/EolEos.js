import React from 'react'
import MockData from '../json_server/EosEolData.json'
import BackNavigation from './BackNavigation'

function EolEos() {
    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "EOS or EOL") {
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
                                            data.eolEosHeading.map((heading, index) => {
                                                return (<th key={index}>{heading}</th>)
                                            })
                                        }
                                    </tr>
                                    {data.eolEosData.map((mydata, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <td>{mydata.applicationName}</td>
                                                    <td >{mydata.appVersionInProd}</td>
                                                    <td >{mydata.currentAppVersion}</td>
                                                    <td >{mydata.availableAppVersion}</td>
                                                    <td >{mydata.pkeNumber}</td>
                                                    <td >{mydata.submitDate}</td>
                                                    <td >{mydata.pkeStatus}</td>
                                                    <td >{mydata.assignGroup}</td>
                                                    <td >{mydata.remark}</td>
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

export default EolEos