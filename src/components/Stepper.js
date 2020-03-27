
/*type CardProps = {
  title: string,
  paragraph: string
}

const StepperCard = ({ title, paragraph }: CardProps) => (
)
export default StepperCard;*/

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
import Title from '../scenes/Home/Title';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Markdown from './Markdown';


const useStyles = makeStyles((theme) =>
  createStyles({
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

export default function StepperCard(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = props.steps;

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

  return (
    <React.Fragment>
      
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} >
            <StepButton onClick={handleStep(index)}>
            {step.label}
            </StepButton>
            {/*<StepLabel  onClick={handleStep(index)}>{step.label}</StepLabel>*/}
            <StepContent>
              <Typography><Markdown className={classes.markdown}>{step.description}</Markdown></Typography>
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
    </React.Fragment>
  );
}