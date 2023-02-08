import React from 'react';
import BackNavigation from './BackNavigation'
import AllInOneDashboardMock from '../json_server/AllInOneDashboardMock.json';
import './AllInOneDashboard.css'

function AllInOneDashboard() {
  return (
      <div className='main-container'>
       <h1 className='pageName allinonetitle'>All In One Dashboard</h1>
      {console.log(AllInOneDashboardMock && AllInOneDashboardMock[0].applications.map(data => data.Application))}
        <div className='dashboard-wrapper'>
            <span className='column-width'>
                 <span className="columnHeader columnapplicationname"> Applications </span>
            </span>
            <span className='column-separator'></span>
            <span className='column-width'>
                 <span className="columnHeader columnHeaderMargin">Systems </span>
            </span>
            <span className='column-separator'></span>
            <span className='column-width'>
                 <span className="columnHeader columnHeaderMargin"> Operational </span>
            </span>
            <span className='column-separator'></span>
            <span  className='column-width'>
                 <span className="columnHeader columnHeaderMargin"> Maintenance </span>
            </span>
            <span className='column-separator'></span>
            <span  className='column-width'>
                 <span className="columnHeader columnHeaderMargin"> Miscellaneous </span>
            </span>
            <span className='column-separator'></span>
        </div>
        <div className="row-separator"></div>
            <span className='column-width'></span>
            <span className='column-separator'></span>
            <span className='column-width'>
                <span className="kpi">Availability</span>
                <span className="kpi">Performance</span>
                <span className="kpi">Capacity</span>
                <span className="kpi">Redundancy</span>
            </span>
            <span className='column-separator'></span>
                <span className='column-width'>
                    <span className="kpi">P1/P2 Incidents</span>
                    <span className="kpi">Pending RCA</span>
                    <span className="kpi">Risks</span>
                    <span className="kpi">Issues</span>
                </span>
            <span className='column-separator'></span>
                <span className='column-width'>
                    <span className="kpi">PKE</span>
                    <span className="kpi">App Patching</span>
                    <span className="kpi">OS Patching</span>
                    <span className="kpi">DB Patching</span>
                </span>
            <span className='column-separator'></span>
                <span className='column-width'>
                    <span className="kpi">Development Road Plan</span>
                    <span className="kpi">Health Checks</span>
                    <span className="kpi">L2/L3 Support</span>
                    <span className="kpi">EOL/EOS</span>
           </span>
        <div className="row-separator"></div>
         {AllInOneDashboardMock && AllInOneDashboardMock[0].applications.map(data => {
         return (
            <div >
                <div className="applicationRow">
                      <span className='column-width-applicationname'>
                            <span className='applicationName'> {data['Application']}</span>
                       </span>
                      <span className='column-separator'></span>
                      <span className='column-width'>
                            <span className={"healthcheck "+ (!!data['Systems']['Availability'].toLowerCase() ? data['Systems']['Availability'].toLowerCase() : 'grey') }> </span>
                            <span className={"healthcheck "+ (!!data['Systems']['Performance'].toLowerCase() ? data['Systems']['Performance'].toLowerCase() : 'grey') }> </span>
                            <span className={"healthcheck "+ (!!data['Systems']['Capacity'].toLowerCase() ? data['Systems']['Capacity'].toLowerCase() : 'grey')}> </span>
                            <span className={"healthcheck "+ (!!data['Systems']['Redundancy'].toLowerCase() ? data['Systems']['Redundancy'].toLowerCase() : 'grey')}> </span>
                      </span>
                       <span className='column-separator'></span>
                       <span className='column-width'>
                            <span className={"healthcheck "+ (!!data['Operational']['P1/P2 Incidents'].toLowerCase() ? data['Operational']['P1/P2 Incidents'].toLowerCase() : 'grey') }> </span>
                            <span className={"healthcheck "+ (!!data['Operational']['Pending RCA'].toLowerCase() ? data['Operational']['Pending RCA'].toLowerCase() : 'grey') }> </span>
                            <span className={"healthcheck "+ (!!data['Operational']['Risks'].toLowerCase() ? data['Operational']['Risks'].toLowerCase() : 'grey')}> </span>
                            <span className={"healthcheck "+ (!!data['Operational']['Issues'].toLowerCase() ? data['Operational']['Issues'].toLowerCase() : 'grey')}> </span>
                       </span>
                       <span className='column-separator'></span>
                       <span className='column-width'>
                          <span className={"healthcheck "+ (!!data['Maintenance']['PKE'].toLowerCase() ? data['Maintenance']['PKE'].toLowerCase() : 'grey') }> </span>
                          <span className={"healthcheck "+ (!!data['Maintenance']['App Patching'].toLowerCase() ? data['Maintenance']['App Patching'].toLowerCase() : 'grey') }> </span>
                          <span className={"healthcheck "+ (!!data['Maintenance']['OS Patching'].toLowerCase() ? data['Maintenance']['OS Patching'].toLowerCase() : 'grey')}> </span>
                          <span className={"healthcheck "+ (!!data['Maintenance']['DB Patching'].toLowerCase() ? data['Maintenance']['DB Patching'].toLowerCase() : 'grey')}> </span>
                       </span>
                        <span className='column-separator'></span>
                        <span className='column-width'>
                            <span className={"healthcheck "+ (!!data['Miscellaneous']['Development Road Plan'].toLowerCase() ? data['Miscellaneous']['Development Road Plan'].toLowerCase() : 'grey') }> </span>
                            <span className={"healthcheck "+ (!!data['Miscellaneous']['Health Checks'].toLowerCase() ? data['Miscellaneous']['Health Checks'].toLowerCase() : 'grey') }> </span>
                            <span className={"healthcheck "+ (!!data['Miscellaneous']['L2/L3 Support'].toLowerCase() ? data['Miscellaneous']['L2/L3 Support'].toLowerCase() : 'grey')}> </span>
                            <span className={"healthcheck "+ (!!data['Miscellaneous']['EOL/EOS'].toLowerCase() ? data['Miscellaneous']['EOL/EOS'].toLowerCase() : 'grey')}> </span>
                        </span>
                </div>
            </div>
         )
         })
         }
      </div>
  )
}

export default AllInOneDashboard