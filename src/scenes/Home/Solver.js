import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import StepButton from '@material-ui/core/StepButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Link from '@material-ui/core/Link';
import sharedStyles from "../../components/sharedStyles";
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles((theme) =>
  createStyles({
    ...sharedStyles,
    root: {
      width: '100%',
    },
    fixedHeight: {
      height: '100%',
    },
    seeMore: {
        marginTop: theme.spacing(3),
      },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    media: {
      //height: 200,
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center center'
    }
  }),
);

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


export default function Solver() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleStep = step => () => {
    setActiveStep(step);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
    <Paper className={fixedHeightPaper}>
    <Title>Troubleshooting Your Internet Connection</Title>
    <Typography>For each ad campaign that you create, you can control how much
              you're willing</Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepButton onClick={handleStep(index)}>
            {step.label}
            </StepButton>
            {/*<StepLabel  onClick={handleStep(index)}>{step.label}</StepLabel>*/}
            <StepContent>
              <Typography>{step.description}</Typography>
              <CardMedia
              image={step.img.link}
              style={{height:step.img.height}}
          className={classes.media}
        />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={()=>{}}>
          See more orders
        </Link>
      </div>
      </Paper>
    </React.Fragment>
  );
}