import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalSingUp from './personal.singup';
import ProfileSingUp from './profile.singup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'auto',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Personal Info', 'Profile Info'];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [profile, setProfile] = useState('');
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const stateValue = {"firstName":firstName,"lastName":lastName,"email":email,"password":password,"designation":designation,"profile":profile};
  const setState = (event:any) => {
      switch(event.target.name) {
          case "firstName":
              setFirstName(event.target.value);
              break;
          case "lastName":
              setLastName(event.target.value);
              break;
          case "email":
              setEmail(event.target.value);
              break;
          case "password":
              setPassword(event.target.value);
              break;
          case "designation":
              setDesignation(event.target.value);
              break;
          case "profile":
              setProfile(event.target.files[0]);              
              break;
          default:
              break;
      }
  }

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <PersonalSingUp onChange={setState} setValue={stateValue} />;
      case 1:
        return <ProfileSingUp onChange={setState} />;
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
