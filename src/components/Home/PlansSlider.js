import React, { useState } from 'react';
import get from 'lodash/get';
import { Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Plan from '../Plans';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SwipeableViews from 'react-swipeable-views';

const Styles = makeStyles((theme) => ({
  containerPlans: { paddingTop: '2em' },
  titleType: {
    fontFamily: 'Montserrat',
    fontSize: '38px',
    marginTop: '38px',
    textAlign: 'center',
  },
  button: {
    cursor: 'pointer',
    position: 'relative',
    margin: 5,
    padding: 0,
  },
  arrowLeft: {
    position: 'absolute',
    top: 'auto',
    left: 'auto',
  },
  arrowRigt: {
    position: 'absolute',
    top: 'auto',
    right: 'auto',
  },
  containPlans: {
    display: 'flex',
    flex: 1,
  },
}));

export default ({ plans }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const classes = Styles();
  return (
    <div className={classes.containPlans}>
      <IconButton
        color="inherit"
        className={classes.button}
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        <RadioButtonUncheckedIcon />
        <ChevronLeftIcon className={classes.arrowLeft} />
      </IconButton>
      <div
        style={{
          flexDirection: 'column',
          flex: 1,
          width: '100%',
          marginTop: 25,
          marginBottom: 25,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'stretch',
          display: 'flex',
        }}
      >
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {plans.map(({ node }) => (
            <div
              style={{
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                margin: 3,
              }}
            >
              <Plan
                imagePlan={`url(${node.image.file.url})`}
                title={node.title}
                description={node.description}
                amount={node.amount}
                link={node.link}
              />
            </div>
          ))}
        </SwipeableViews>
      </div>
      <IconButton
        color="inherit"
        className={classes.button}
        onClick={handleNext}
        disabled={activeStep === plans.length - 1}
      >
        <RadioButtonUncheckedIcon />
        <ChevronRightIcon className={classes.arrowRigt} />
      </IconButton>
    </div>
  );
};
