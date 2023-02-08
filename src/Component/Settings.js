import React, {useState} from 'react'
import BackNavigation from './BackNavigation';
import TextField from "@mui/material/TextField";
import AllInOneDashboardMock from '../json_server/AllInOneDashboardMock.json';
import './settings.css'

function Settings() {
   const [inputText, setInputText] = useState("");
   const [mockData, setMockData] = useState([{'Application':'All In One Dashboard'}, ...AllInOneDashboardMock[0].applications]);
   const [filteredData, setFilteredData]= useState([{'Application':'All In One Dashboard'}, ...AllInOneDashboardMock[0].applications]);

   const inputHandler = (e) => {
    if(!!e.target.value.toLowerCase()) {
        setFilteredData(mockData.filter((el) => {
             if(el['Application'].includes(e.target.value)) {
                return el;
             }
        }));
    } else {
        setFilteredData([{'Application':'All In One Dashboard'}, ...AllInOneDashboardMock[0].applications]);
    }
  };

  return (
    <div className='main-container'>
        <BackNavigation></BackNavigation>
        <h1 className='allinonetitle'>Settings</h1>
        <div className='dashboard-wrapper'>
        <h3 className="subheading"> Select Default Dashboard Home Page </h3>
            <TextField
                      id="outlined-basic"
                      onChange={inputHandler}
                      variant="outlined"
                      fullWidth
                      label="Search"
                    />
            <div className="options-wrapper">
             {filteredData.map(data => {
             return(
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <span className="adjust-fontweight"> {data['Application']}</span>
                </label>
              </div>
             )

             })
             }
              </div>
        </div>
    </div>
  )
}

export default Settings