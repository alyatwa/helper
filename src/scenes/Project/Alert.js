import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import ReactMde from "react-mde";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) =>
  createStyles({
}),
);

export default function Alert(props) {
  const classes = useStyles();
  console.log(props)
  const [severity, setSeverity] = React.useState("success");

  return (
    <React.Fragment>
    <MuiAlert elevation={6} variant="filled" severity={props.severity}>{props.msg}</MuiAlert>
    </React.Fragment>
  );
}