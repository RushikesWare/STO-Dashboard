import React from "react";
import MockData from "../json_server/MockData.json";
import BackNavigation from "./BackNavigation";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function RCAs() {
  return (
    <div className="main-container">
      {MockData &&
        MockData.map((data) => {
          if (data.pageName === "RCAs") {
            return (
              <div key={data.pageName}>
                <BackNavigation></BackNavigation>
                <h1 className="pageName">{data.pageName}</h1>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Item>
                      <table className="availblityTable">
                        <caption>(1) Event</caption>
                        <tbody>
                          <tr>
                            {data.RCAsHeading.map((heading) => {
                              return <th>{heading}</th>;
                            })}
                          </tr>
                          {data.RCAsData.map((mydata) => {
                            return (
                              <tr key={mydata.pkeId}>
                                <td>{mydata.likelihood}</td>
                                <td>{mydata.pkeId}</td>
                                <td>{mydata.date}</td>
                                <td>{mydata.time}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <table className="availblityTable">
                        <caption>(2) RCA Assignment</caption>
                        <tbody>
                          <tr>
                            {data.RcaAssignmentHeading.map((heading) => {
                              return <th>{heading}</th>;
                            })}
                          </tr>
                          {data.RcaAssignmentData.map((mydata) => {
                            return (
                              <tr key={mydata.RCA}>
                                <td>{mydata.RCA}</td>
                                <td>{mydata.assignmentStatus}</td>
                                <td>{mydata.assignee}</td>
                                <td>{mydata.ageing}</td>
                                <td>{mydata.RCAStatus}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <table className="availblityTable">
                        <caption>(3) Timeline of Events</caption>
                        <tbody>
                          <tr>
                            {data.timelineEventsHeading.map((heading) => {
                              return <th>{heading}</th>;
                            })}
                          </tr>
                          {data.timelineEventsData.map((mydata) => {
                            return (
                              <tr key={mydata.id}>
                                <td>{mydata.Date}</td>
                                <td>{mydata.Time}</td>
                                <td>{mydata.Description}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Item>
                  </Grid>
                </Grid>

                <div className="defination">
                  <table className="availblityTable">
                    <tbody key={data.ragDefinition.Red.id}>
                      <tr>
                        <th>{data.ragHeading}</th>
                        <th>{data.defHeading}</th>
                      </tr>
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
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default RCAs;
