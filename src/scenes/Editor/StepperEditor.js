import React, { Component } from 'react';
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
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import { withStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';

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
      steps: []
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
  handleChange(value, sec, stepId, stepperId) {
    this.props.StepperText({ value, sec, stepId, stepperId })
  }
  componentWillMount() {
    this.initFun()
  }
  componentWillReceiveProps() {
    this.initFun()
  }
  initFun() {
    this.timer = null;
    var newState = [];
    for (var i = 0; i < this.props.steps.length; i++) {
      newState.push({ desc: this.props.steps[i].description, stepId: this.props.steps[i].id })
    }
    console.log(newState)
    this.setState({ steps: newState })
  }
  handleChangeMD(value, stepId, stepperId) {
    clearTimeout(this.timer);
    var stepIndex = this.state.steps.findIndex(obj => obj.stepId === stepId);
    this.setState(state => {
      var list = state.steps[stepIndex].desc = value;
      return {
        list
      }
    })
    this.timer = setTimeout(() => this.triggerChange(value, stepId, stepperId), 1000);
  }

  triggerChange(value0, stepId, stepperId) {
    var stepIndex = this.state.steps.findIndex(obj => obj.stepId === stepId);
    var value = this.state.steps[stepIndex].desc;
    //console.log('tig!!', value, stepId, stepperId)
    this.handleChange(value, 'description', stepId, stepperId)
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
                <Box my={2}>
                  <ReactMde
                    key={index}
                    value={this.state.steps[index].desc}
                    onChange={e => this.handleChangeMD(e, step.id, stepper.id)}
                  /></Box>
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