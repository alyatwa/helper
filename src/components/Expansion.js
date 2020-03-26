import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Markdown from './Markdown';
//const ReactMarkdown = require('react-markdown')

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

export default function ExpansionCard(props) {
  const classes = useStyles();
  const data = props.data;
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
    <div className={classes.root}>
        {data.map((info, index) => (
      <ExpansionPanel className={classes.shadow} expanded={expanded === info.id} onChange={handleChange(info.id)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{info.heading}</Typography>
          <Typography className={classes.secondaryHeading}>{info.secondaryHeading}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.detail}>
        <Typography><Markdown className={classes.markdown}>
        {info.Details}
          {/*<Typography>
            <ReactMarkdown source={info.Details} />
          </Typography>*/}
          </Markdown></Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>))}
      
    </div>
    </React.Fragment>
  );
}