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
    padding: 7,
    background: '#ECECEC',
    height: 80,
  },
  containCards: { overflow: 'hidden' },
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  var aux = [];
  for (let index = 0; index < DummyData.length / 3; index++) {
    aux[index] = DummyData.slice(index * 3, index * 3 + 3);
  }
  return (
    <Grid item className={classes.root}>
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
            spacing="1"
          >
            <IconButton
              color="inherit"
              className={classes.button}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <RadioButtonUncheckedIcon />
              <ChevronLeftIcon className={classes.arrowLeft} />
            </IconButton>
            <Grid item md={10}>
              <SwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {aux.map((step) => (
                  <Grid
                    xs={12}
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                    spacing={2}
                    className={classes.containCards}
                  >
                    {step.map((event) => (
                      <Grid item xs={12} md={4}>
                        <Paper
                          elevation={0}
                          className={classes.cardCarousel}
                        >
                          {event.name}
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </SwipeableViews>
            </Grid>
            <IconButton
              color="inherit"
              className={classes.button}
              onClick={handleNext}
              disabled={activeStep === aux.length - 1}
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
