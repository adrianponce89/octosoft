import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, IconButton } from '@material-ui/core';
import { Link } from 'gatsby';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SwipeableViews from 'react-swipeable-views';

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
    cursor: 'pointer',
  },
  containCards: { overflow: 'hidden' },
  button: {
    cursor: 'pointer',
    position: 'relative',
    margin: 5,
    padding: 0,
    '@media (max-width: 760px)': { order: '1' },
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
  containEvent: {
    '@media (max-width: 876px)': {
      justifyContent: 'flex-end',
      flexWrap: 'wrap-reverse',
    },
  },
  titleEvent: { textAlign: 'center' },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
});

const Event = ({ stylesGlobal, events }) => {
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

  let aux = [];

  for (let index = 0; index < events.length / 3; index++) {
    aux[index] = events.slice(index * 3, index * 3 + 3);
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
            spacing={1}
            className={classes.containEvent}
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
            <Grid item xs={12} sm={10}>
              <SwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {aux.map((step, i) => (
                  <Grid
                    xs={12}
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                    spacing={2}
                    className={classes.containCards}
                    key={i}
                  >
                    {step.map((event) => (
                      <Grid item xs={12} sm={4} key={event.node.id}>
                        <Paper
                          elevation={0}
                          className={classes.cardCarousel}
                        >
                          <Link
                            className={classes.link}
                            to={event.node.link}
                          >
                            <Grid
                              container
                              direction="column"
                              justify="center"
                              spacing={2}
                            >
                              <Grid item sm={6}>
                                {event.node.date}
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                className={classes.titleEvent}
                              >
                                {event.node.title}
                              </Grid>
                            </Grid>
                          </Link>
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
