import React, { Component } from 'react';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import StepButton from '@material-ui/core/StepButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import "react-mde/lib/styles/css/react-mde-all.css";
import { withStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MDBox from './MDBox';

const styles = theme => ({
  root: {
    width: '100%'
  },
  fixedHeight: {
    height: '100%',
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
  button: {
    //marginRight: theme.spacing(1),
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
})

class StepperEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepper: {},
      activeStep: 0,
      value: '',
      steps: [],
      selectedTab:'write'
    }
    this.handleNext = this.handleNext.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  handleNext() {
    this.setState({ activeStep: this.state.activeStep + 1 })
  };
  handleMD(data) {
    this.setState({ value: data })
    console.log(this.state.value)
  }
  handleBack() {
    this.setState({ activeStep: this.state.activeStep - 1 })
  };
  handleStep(step) {
    this.setState({ activeStep: step })
  };
  handleReset() {
    this.setState({ activeStep: 0 })
  };
  triggerChange(value, stepId, stepperId) {
    this.props.StepperText({ value, sec:'description', stepId, stepperId })
  }
  handleChange(value, sec, stepId, stepperId) {
    this.props.StepperText({ value, sec, stepId, stepperId })
  }
  render() {
    const stepper = this.props
    const steps = stepper.steps;
    //const steps = this.state.stepper.steps;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Stepper activeStep={this.state.activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} >
              <StepLabel>

                <TextField
                  key="ijihyg"
                  defaultValue={step.label}
                  onBlur={(e) => this.handleChange(e.target.value, 'label', step.id, stepper.id)}
                  onClick={() => this.handleStep(index)}
                  id="outlined-basic" label="Step Title" />
                <IconButton onClick={() => stepper.addStep(index, stepper.id)} className={classes.button} aria-label="delete">
                  <AddIcon />
                </IconButton>
                <IconButton onClick={() => stepper.removeStep(step.id, index)} className={classes.button} disabled={index === 0} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StepLabel>
              <StepContent>
               
                  <MDBox value={step.description} mdb={(value)=>this.triggerChange(value,step.id, stepper.id)} />
               
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={this.state.activeStep === 0}
                      onClick={() => this.handleBack()}
                      className={classes.button}
                    >
                      Back
                  </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.handleNext()}
                      className={classes.button}
                    >
                      {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>

                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {this.state.activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <TextField id="outlined-basic"
              onBlur={(e) => this.handleChange(e.target.value, 'finish', 'finish', stepper.id)}
              defaultValue={this.props.finish} label="Last Step" variant="outlined" />


          </Paper>
        )}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(StepperEditor);