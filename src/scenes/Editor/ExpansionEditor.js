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

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    markdown: {
      ...theme.typography.body2,
      //padding: theme.spacing(3, 0),
    },
    detail:{
      padding:'8px 24px 0'
    },
    shadow:{
        boxShadow: 'unset'
      },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

export default function ExpansionEditor(props) {
  const classes = useStyles();
  //console.log(props)
  const data = props;
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
    <div className={classes.root}>
        {data.steps.map((info, index) => (
      <ExpansionPanel className={classes.shadow} key={info.id+'jhu'} expanded={expanded === info.id} onChange={handleChange(info.id)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <TextField id="standard-basic" className={classes.heading} value={info.heading} label="Title" />
            
          </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.detail}>
        <Box m={1}>
        <ReactMde
                  value={info.Details}
                /></Box>
        <Typography>
        
         </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>))}
      
    </div>
    </React.Fragment>
  );
}