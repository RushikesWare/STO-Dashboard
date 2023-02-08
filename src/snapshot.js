import React from "react";
import "./snapshot.css";
import MockData from "../src/json_server/MockData.json";
import Button from "@mui/material/Button";
import AllInOneDashboardMock from './json_server/AllInOneDashboardMock.json'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import AlertDialog from "./Component/AlertDialog";
function Snapshot(props) {

  const navigate = useNavigate();

  const location = useLocation();
  const headerName = location.state?.headerName;

  const rows = [
    [
      { name: "Systems" },
      {
        name: "Availability",
        status: "success",
        isLink: true,
        icon: "InfoIcon",
      },
      {
        name: "Performance",
        status: "success",
        isLink: true,
        icon: "InfoIcon",
        isLink: true,
        icon: "InfoIcon",
      },
      { name: "Capacity", status: "success", isLink: true, icon: "InfoIcon" },
      { name: "Security", status: "warning", isLink: true, icon: "InfoIcon" },
    ],
    [
      { name: "Operational" },
      {
        name: "P1/P2 Incidents",
        status: "success",
        isLink: true,
        icon: "InfoIcon",
      },
      { name: "RCAs", status: "success", isLink: true, icon: "InfoIcon" },
      { name: "Risks", status: "success", isLink: true, icon: "InfoIcon" },
      { name: "Issues", status: "warning", isLink: true, icon: "InfoIcon" },
    ],
    [
      { name: "Maintenance" },
      { name: "PKEs", status: "success", isLink: true, icon: "InfoIcon" },
      {
        name: "App patching",
        status: "success",
        isLink: true,
        icon: "InfoIcon",
      },
      {
        name: "OS patching",
        status: "success",
        isLink: true,
        icon: "InfoIcon",
      },
      {
        name: "DB patching",
        status: "success",
        isLink: true,
        icon: "InfoIcon",
      },
    ],
    [
      { name: "Miscellaneous" },
      {
        name: "Dpl Roadmap",
        status: "success",
        isLink: true,
        icon: "InfoIcon",
      },
      {
        name: "Health Checks",
        status: "success",
        isLink: true,
        icon: "InfoIcon",
      },
      {
        name: "L2/L3 Support",
        status: "success",
        isLink: true,
        icon: "InfoIcon",
      },
      { name: "EOL/EOS", status: "success", isLink: true, icon: "InfoIcon" },
    ],
  ];
  let trList = [];
  for (const [i, row] of rows.entries()) {
    let tdList = [];
    for (const [i, col] of row.entries()) {
      let td = [];
      if (col.icon) {
        td.push(
          <span className="info">
            <AlertDialog name={col.name}/>
          </span>
        );
      }
      if (col.status) {
        {AllInOneDashboardMock && AllInOneDashboardMock[0].applications.map(allinonedata => {   
          if(allinonedata['Application'] === headerName) {        
            td.push(<span className={"StatusIcon " + (!!allinonedata[row[0].name][col.name] ? allinonedata[row[0].name][col.name].toLowerCase() : 'grey')}></span>);
               }   } )}
        // td.push(<span className={"StatusIcon " + col.status}></span>);
      }

      if (col.isLink) {
        td.push(
          <label>
            <Link to={col.name} state= {{ headerName: headerName }}>{col.name}</Link>
          </label>
        );
      } else {
        td.push(<label >{col.name}</label>);
      }

      tdList.push(<td>{td}</td>);
    }
    trList.push(<tr>{tdList}</tr>);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
        Application {headerName} Snapshot
      </h1>
      <table className="snapshot-table">
        <tbody>{trList}</tbody>
      </table>
      <div>
        {MockData &&
          MockData.map((data, index) => {
            if (data.pageName === "Snapshot") {
              return (
                <div className="defination">
                  <table className="availblityTable">
                    <tbody>
                      <tr>
                        <td>
                          <span className={data.ragDefinition.Red.color}></span>
                        </td>
                        <td>{data.ragDefinition.Red.definition}</td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span
                            className={data.ragDefinition.Yellow.color}
                          ></span>
                        </td>
                        <td>{data.ragDefinition.Yellow.definition}</td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span
                            className={data.ragDefinition.Green.color}
                          ></span>
                        </td>
                        <td>{data.ragDefinition.Green.definition}</td>
                      </tr>
                    </tbody>
                  </table>
                  <Button
                    variant="contained"
                    className="guidelineBtn Rag-def-button"
                    onClick={() => navigate("/home/RAG-Definitions")}
                  >
                    RAG Definitions
                  </Button>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default Snapshot;
