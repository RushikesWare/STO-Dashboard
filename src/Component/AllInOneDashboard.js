import React from 'react';
import AllInOneDashboardMock from '../json_server/AllInOneDashboardMock.json';
import './AllInOneDashboard.css'

function AllInOneDashboard() {
  return (
      <div className='main-container'>
       <h1 className='pageName'>All In One Dashboard</h1>
      {console.log(AllInOneDashboardMock && AllInOneDashboardMock[0].applications.map(data => data.Application))}
        <div className='dashboard-wrapper'>
            <span className='column-width'>
                 <span className="columnHeader"> Applications </span>
            </span>
            <span className='column-separator'></span>
            <span className='column-width'>
                 <span className="columnHeader">Systems </span>
            </span>
            <span className='column-separator'></span>
            <span className='column-width'>
                 <span className="columnHeader"> Operational </span>
            </span>
            <span className='column-separator'></span>
            <span  className='column-width'>
                 <span className="columnHeader"> Maintenance </span>
            </span>
            <span className='column-separator'></span>
            <span  className='column-width'>
                 <span className="columnHeader"> Miscellaneous </span>
            </span>
            <span className='column-separator'></span>
        </div>
        <div className="row-separator"></div>
            <span className='column-width'></span>
            <span className='column-separator'></span>
            <span className='column-width adjustmargin'>
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
                <span className='column-width adjustmargin-maintenance'>
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
                      <span className='column-width'>
                            <span> {data['Application']}</span>
                       </span>
                      <span className='column-separator'></span>
                      <span className='column-width'>
                            <span className={"healthcheck "+ data['Systems']['Availability'].toLowerCase()}> </span>
                            <span className={"healthcheck "+ data['Systems']['Performance'].toLowerCase()}> </span>
                            <span className={"healthcheck "+ data['Systems']['Capacity'].toLowerCase()}> </span>
                            <span className={"healthcheck "+ data['Systems']['Redundancy'].toLowerCase()}> </span>
                      </span>
                       <span className='column-separator'></span>
                       <span className='column-width'>
                            <span className={"healthcheck "+ data['Operational']['P1/P2 Incidents'].toLowerCase()}> </span>
                            <span className={"healthcheck "+ data['Operational']['Pending RCA'].toLowerCase()}> </span>
                            <span className={"healthcheck "+ data['Operational']['Risks'].toLowerCase()}> </span>
                            <span className={"healthcheck "+ data['Operational']['Issues'].toLowerCase()}> </span>
                       </span>
                       <span className='column-separator'></span>
                       <span className='column-width'>
                            <span className={"healthcheck "+ data['Maintenance']['PKE'].toLowerCase()}> </span>
                            <span className={"healthcheck "+ data['Maintenance']['App Patching'].toLowerCase()}> </span>
                            <span className={"healthcheck "+ data['Maintenance']['OS Patching'].toLowerCase()}> </span>
                            <span className={"healthcheck "+ data['Maintenance']['DB Patching'].toLowerCase()}> </span>
                       </span>
                        <span className='column-separator'></span>
                        <span className='column-width'>
                             <span className={"healthcheck "+ data['Miscellaneous']['Development Road Plan'].toLowerCase()}> </span>
                             <span className={"healthcheck "+ data['Miscellaneous']['Health Checks'].toLowerCase()}> </span>
                             <span className={"healthcheck "+ data['Miscellaneous']['L2/L3 Support'].toLowerCase()}> </span>
                             <span className={"healthcheck "+ data['Miscellaneous']['EOL/EOS'].toLowerCase()}> </span>
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