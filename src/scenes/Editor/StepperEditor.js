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


const styles = theme => ({
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
})

class StepperEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepper: {},
      activeStep: 0,
      value: '**Hello world!!!**'
    }
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    this.setState({ activeStep: this.state.activeStep + 1 })
  };
  handleMD(data) {
    this.setState({ value: data })
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
  componentWillMount() {
    this.setState({ stepper: this.props[0] })
  }
  removeStep(id, index) {
    
    var itemIndex = this.state.stepper.steps.findIndex(obj => obj.id === id);
    this.setState(state => {
      const list = this.state.stepper.steps.splice(itemIndex, 1)
      return {
        list
      }
    })
  }
  addStep(step) {
    let newStep = {
      id: 65678,
      label: 'step 3',
      description: 'des'
    }
    this.setState(state => {
      //const list = state.stepper.steps.push(newStep)
      const list = state.stepper.steps.splice(step+1, 0, newStep);
      
      return {
        list
      }
    })
  }

  render() {
    //const steps = this.props[0].steps;
    const steps = this.state.stepper.steps;
    console.log(this.state.stepper);
    const { classes } = this.props;
    return (
      <React.Fragment>

        <Stepper activeStep={this.state.activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} >
              <StepLabel>

                <TextField onClick={() => this.handleStep(index)} id="outlined-basic" value={step.label} label="Step Title"  />
                <IconButton onClick={() => this.addStep(index)} className={classes.button} aria-label="delete">
                  <AddIcon />
                </IconButton>
                <IconButton onClick={() => this.removeStep(step.id, index)} className={classes.button} disabled={index === 0 || index === 1} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StepLabel>

              <StepContent>
                <ReactMde
                  value={step.description}
                  onChange={() => this.handleMD()}
                />
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
            <TextField id="outlined-basic" value={this.props[0].finish} label="Last Step" variant="outlined" />

            <Button onClick={() => this.handleReset()} className={classes.button}>
              Reset
          </Button>
          </Paper>
        )}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(StepperEditor);