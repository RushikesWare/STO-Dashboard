import React from 'react'
import MockData from '../json_server/DbPatching.json'
import BackNavigation from './BackNavigation'

function DbPatching() {
    return (
        <div className='main-container'>
            {MockData && MockData.map(data => {
                if (data.pageName === "DB Patching") {
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
                                            data.dbPatchingHeading.map((heading, index) => {
                                                return (<th key={index}>{heading}</th>)
                                            })
                                        }
                                    </tr>
                                    {data.dbPatchingData.map((mydata, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <td>{mydata.HostName}</td>
                                                    <td >{mydata.Category}</td>
                                                    <td >{mydata.DBInstanceName}</td>
                                                    <td >{mydata.DBUniqueName}</td>
                                                    <td >{mydata.DBDatabaseRole}</td>
                                                    <td >{mydata.DBVersion}</td>
                                                    <td >{mydata.Environment}</td>
                                                    <td >{mydata.HostingLocation}</td>
                                                    <td >{mydata.Applications}</td>
                                                    <td >{mydata.ApplicationContact}</td>
                                                    <td >{mydata.PatchingCycle}</td>
                                                    <td >{mydata.PlannedEndDate}</td>
                                                    <td >{mydata.N1Status}</td>
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

export default DbPatching