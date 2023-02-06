import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import MockData from "../json_server/MockData.json";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const name = props.name;
  const obj = {
    Availability: "ragAvailabilityData",
    Security: "ragSecurityData",
    Performance: "ragPerformanceData",
    Capacity: "ragCapacityData",

  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <span onClick={handleClickOpen}>
        <IconButton
          size="small"
          aria-label="show more"
          aria-haspopup="true"
          color="teal"
        >
          <InfoIcon />
        </IconButton>
      </span>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {MockData &&
              MockData.map((data) => {
                if (data.pageName === "Snapshot: RAG Definitions" && name) {
                  return (
                    <div key={data.pageName}>
                      <Grid container spacing={1}>
                        <Item>
                          <table className="availblityTable">
                            <tbody>
                              <tr>
                                <th colSpan={2}>{data.ragDefinitionHeading}</th>
                              </tr>
                              {data[obj[name]] &&
                                data[obj[name]].map((mydata) => {
                                  return (
                                    <tr key={mydata.color}>
                                      <td>
                                        <span className={mydata.color}></span>
                                      </td>
                                      <td>{mydata.description}</td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </Item>
                      </Grid>
                    </div>
                  );
                }
              })}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
