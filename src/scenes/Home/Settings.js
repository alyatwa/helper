import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import clsx from 'clsx';
import StepperCard from '../../components/Stepper'; 
import ExpansionCard from '../../components/Expansion'; 
import sharedStyles from "../../components/sharedStyles";

const useStyles = makeStyles(theme => ({
  ...sharedStyles,
  root: {
    width: '100%',
  },
  shadow:{
    boxShadow: 'unset'
  },
  fixedHeight: {
    height: '100%',
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
}));
function getSteps() {
  return [{
    label:'Restart router',
    description:'Restart your router!',
    img:{
      link:'https://images.unsplash.com/photo-1516044734145-07ca8eef8731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      height:200
     }
  },{
    label:'Check router setteings',
    description:'Login to router settings to chech if it working',
    img:{
      link:'https://www.lifewire.com/thmb/KnNk8cmFh7JxlylowWPmBXYe19A=/1920x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dhcp-error-what-it-is-and-how-to-fix-it-4687111-10-e52540b6a909455aba05f94441ccb8d6.png',
      height:300
     }
  },{
    label:'Run your network diagnostics',
    description:'Run your network diagnostics',
    img:{
      link:'https://www.lifewire.com/thmb/072lR-cmhzZAyd30AejfkpuPGYg=/1920x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dhcp-error-what-it-is-and-how-to-fix-it-4687111-2-3-5-a62ff752ed98432d99b9c2aa1acb1dd4.png',
      height:300
     }
  },{
    label:'Call Service Provider',
    description:'Call support team',
    img:{
      link:'https://images.unsplash.com/photo-1516044734145-07ca8eef8731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      height:200
     }
  }]
}
function getData(){
  return [{
    id:'fghghtht',
    heading:'General settings',
    secondaryHeading:'I am an expansion panel',
    Details: `
# Live demo
## dfd  
![Espen](https://espen.codes/assets/img/avatar-colored.jpg)  

## Table of Contents  
Changes are automatically re This is a header  
And this is a paragraph [I'm an inline-style link](https://www.google.com)  
dddcvc ff **bokd**  
![Espen](https://espen.codes/assets/img/avatar-colored.jpg)  

## Table of Contents`
  },
  {
    id:'fgrxcdelolo',
    heading:'General settings',
    secondaryHeading:'I am an expansion panel',
    Details: `## Table of Contents  
    jjhh`
  },
  {
    id:'dfgrete',
    heading:'General settings',
    secondaryHeading:'I am an expansion panel',
    Details: '# This is a header\n\nAnd this is a paragraph'
  }]
}
export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const steps = getSteps();
  const expan = getData();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
    <Paper className={fixedHeightPaper}>
    <div className={classes.root}>
      <Title>How to setup Vodafone router?</Title>
      <StepperCard steps={steps}/>
      <Title>Troubleshooting Your Internet Connection</Title>
    <Typography>For each ad campaign that you create, you can control how much
              you're willing</Typography>
      <ExpansionCard data={expan}/>
      </div>
    </Paper>
    </React.Fragment>
  );
}
