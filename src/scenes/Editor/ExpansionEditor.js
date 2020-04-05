import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import MDBox from './MDBox';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    markdown: {
      ...theme.typography.body2,
      //padding: theme.spacing(3, 0),
    },
    detail: {
      padding: '8px 24px 0'
    },
    shadow: {
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
  const triggerChange = (value, sec, stepId, expansionId) => {
    //console.log({ value, sec, stepId, expansionId })
    // this.props.StepperText({ value, sec:'description', stepId, stepperId })
    props.ExpansionText({ value, sec, stepId, expansionId })
  }
  const handleChangeTitle =(value, sec, stepId, expansionId) => {
    props.ExpansionText({ value, sec, stepId, expansionId })
  }
  return (
    <React.Fragment>
      <div className={classes.root}>
        {data.steps.map((info, index) => (
          <ExpansionPanel TransitionProps={{ unmountOnExit: true }} className={classes.shadow} key={info.id + 'jhu'} expanded={expanded === info.id} onChange={handleChange(info.id)}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
        <TextField 
        defaultValue={info.heading}
        onBlur={(e) => handleChangeTitle(e.target.value, 'heading', info.id, data.id)}
        id="standard-basic" className={classes.heading} label="Title" />

            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detail}>
              <MDBox value={info.Details} mdb={(value) => triggerChange(value, 'Details', info.id, data.id)} />

              <Typography>

              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>))}

      </div>
    </React.Fragment>
  );
}