import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/styles";
import { TableCell, TableRow, TableContainer } from "@mui/material";
export const PracticeDiv = styled.div`
  background-color: #110a0a;
`;
export const ContainerDiv = styled.div`
  margin: 100px 0px 10px 0px;
  padding: 10px;
  border-color: #53006a;
  border-style: solid;
  width: 600px;
  height: 300px;
  z-index: 9;
  position: relative;
`;
export const ButtonIcon = styled.div`
  width: 100px;
`;
export const ApplicationDiv = styled.div`
  background-color: red;
  font-weight: 400;
  margin: 37px;
  text-align: center;
  font-size: 19px;
  width: 600px;
  margin-left: 419px;
`;
export const SmallDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 150px;
  font-size: 25px;
  height: 35px;
  width: 250px;
  background-color: red;
  color: white;
  text-align: center;
`;
export const CircleDiv = styled.div`
  position: absolute;
  top: 62px;
  right: 263px;
`;
export const CalenderDiv = styled.div`
  position: absolute;
  top: 9px;
  right: 52px;
`;
export const ChartContainer = styled.div`
  margin: 200px;
  padding: 50px;
  border-color: red;
  border-style: solid;
  width: 718px;
  height: 500px;
`;
export const SubTable = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 50px;
  margin-bottom: 10px;
  height: 290px;
  margin-top: 10px !important;
`;
export const BackButton = styled.div`
  width: 50px;
`;
export const Main = styled.div`
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
const Practice_Styles = () => ({
  OuterDiv: {
    backgroundColor: "red",
    textAlign: "center",
    width: "50%",
    height: "100%",
  },
  outerDiv: {
    padding: "50px",
    borderColor: "red",
    borderStyle: "solid",
    width: "100px",
    height: "100px",
    margin: "auto",
  },
  innerDiv: {
    margin: "0 auto",
    borderColor: "red",
    borderStyle: "solid",
    width: "100px",
    height: "100px",
  },
});
export const PracticeStyled = makeStyles(Practice_Styles);
