import React from 'react'
import MockData from '../json_server/MockData.json'
import BackNavigation from './BackNavigation'
function Availability() {
    return (
        <div className='main-container'>
            
            {MockData && MockData.map(data => {
                if (data.pageName === "Availability") {
                    console.log(data.ragStatusColor);
                    return (
                        <div>
                            <BackNavigation></BackNavigation>
                            <h1 className='pageName'>{data.pageName}</h1>
                            <div className='ragStatus'>{data.ragHeading}
                                <span className={data.ragStatusColor}> </span>
                            </div>
                            <table className='availblityTable' key={data.availabilityValues}>
                                <tbody>
                                    <tr>
                                        <th>{data.measurementHeading}</th>
                                        <th>{data.descHeading}</th>
                                    </tr>
                                    <tr>
                                        <td key={data.availabilityMeasurement.Availability.id}>{data.availabilityMeasurement.Availability.Measurement}</td>
                                        <td key={data.availabilityMeasurement.Availability.Description}>{data.availabilityMeasurement.Availability.Description}</td>
                                    </tr>
                                    <tr>
                                        <td>{data.availabilityMeasurement.criticalTimeFailures.Measurement}</td>
                                        <td>{data.availabilityMeasurement.criticalTimeFailures.Description}</td>
                                    </tr>
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

export default Availability