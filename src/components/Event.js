import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, IconButton } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SwipeableViews from 'react-swipeable-views';

import { dataAbout as DummyData } from '../assets/DummyData';

const styles = makeStyles({
  root: { position: 'relative' },
  containTitle: { top: 8, position: 'absolute' },
  titleCarousel: {
    margin: 0,
    padding: 0,
  },
  cardCarousel: {
    padding: 10,
    background: '#ECECEC',
    height: 80,
  },
  button: {
    cursor: 'pointer',
    position: 'relative',
    margin: 0,
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
});

const Event = ({ stylesGlobal }) => {
  const classes = styles({ stylesGlobal });
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = DummyData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid item xs={12} className={classes.root}>
      <Paper elevation={3} className={stylesGlobal}>
        <div className={classes.containTitle}>
          <p className={classes.titleCarousel}>Upcoming Event</p>
        </div>
        <div>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
          >
            <IconButton
              className={classes.button}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <RadioButtonUncheckedIcon />
              <ChevronLeftIcon className={classes.arrowLeft} />
            </IconButton>
            <Grid
              container
              spacing={4}
              direction="row"
              alignItems="center"
              justify="center"
              md={10}
            >
              <SwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {DummyData.map((step, i) => (
                  <Grid item xs={12} md={4}>
                    <Paper
                      elevation={0}
                      className={classes.cardCarousel}
                    >
                      {step.name}
                    </Paper>
                  </Grid>
                ))}
              </SwipeableViews>
            </Grid>
            <IconButton
              color="inherit"
              className={classes.button}
              onClick={handleNext}
            >
              <RadioButtonUncheckedIcon />
              <ChevronRightIcon className={classes.arrowRigt} />
            </IconButton>
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};

export default Event;
