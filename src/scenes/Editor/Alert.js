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
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles((theme) =>
    createStyles({
        alertp:{
            boxShadow:'unset',
            width:'100%'
        },
        alert:{
            color: 'rgba(0, 0, 0, 1)'
        }
    }),
);

export default function Alert(props) {
    const classes = useStyles();
    //console.log(props)
    //const [severity, setSeverity] = React.useState(props.severity);
    //const [value, setValue] = React.useState(props.msg);
    const severity = props.severity;
    const handleChange = (value, sec, alertId) => {
        //setSeverity(value, sec, alertId);
        props.AlertAction({ value, sec, alertId })
      };
      const handleChangemsg =(value, sec, alertId) => {
        props.AlertAction({ value, sec, alertId })
      }
    return (
        <React.Fragment>
            <MuiAlert elevation={6} classes={{ message: classes.alertp }} className={classes.alertp} variant="filled" severity={severity}>
                <Grid container direction="row" alignItems="center">
                    <IconButton className={severity === 'info' ? classes.alert : ''} onClick={()=>handleChange("info", 'severity', props.id)}>
                        <InfoIcon />
                    </IconButton>
                    <IconButton className={severity === 'warning' ? classes.alert : ''} onClick={()=>handleChange("warning", 'severity', props.id)}>
                        <WarningIcon />
                    </IconButton>
                    <IconButton className={severity === 'error' ? classes.alert : ''} onClick={()=>handleChange("error", 'severity', props.id)}>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton className={severity === 'success' ? classes.alert : ''} onClick={()=>handleChange("success", 'severity', props.id)}>
                        <CheckCircleIcon />
                    </IconButton></Grid>

                <TextField
                    defaultValue={props.msg}
                    onBlur={(e) => handleChangemsg(e.target.value, 'msg', props.id)}
                    id="standard-textarea"
                    placeholder="Message Text"
                    multiline
                    fullWidth
                />
            </MuiAlert>
        </React.Fragment>
    );
}