import React, { useState } from 'react';
import get from 'lodash/get';
import { Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Plan from '../Plans';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles((theme) => ({
  containerPlans: { paddingTop: '2em' },
  titleType: {
    fontFamily: 'Lato',
    fontSize: '38px',
    marginTop: '38px',
    textAlign: 'center',
  },
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
  containPlans: {
    display: 'flex',
  },
}));

const SortPlans = (plans) => {
  let sortPlans = [];
  const titleTypeSet = new Set();

  plans.forEach((plan) => {
    titleTypeSet.add(plan.node.type);
  });

  titleTypeSet.forEach((value) => {
    sortPlans.push({
      type: value,
      plans: plans.filter((p) => p.node.type === value),
    });
  });

  return sortPlans;
};

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

  const plansSort = SortPlans(plans);
  const classes = useStyles();
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
      <div justify="center">
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {plansSort.map(({ type, plans }) => (
            <>
              <Typography variant="h1" className={classes.titleType}>
                {type}
              </Typography>
              <div
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  flex: 1,
                }}
                className={classes.containerPlans}
              >
                {plans.map(({ node }) => (
                  <Plan
                    imagePlan={`url(${node.image.file.url})`}
                    title={node.title}
                    description={node.description}
                    amount={node.amount}
                    link={node.link}
                  />
                ))}
              </div>
            </>
          ))}
        </SwipeableViews>
      </div>
      <IconButton
        color="inherit"
        className={classes.button}
        onClick={handleNext}
        disabled={activeStep === plansSort.length - 1}
      >
        <RadioButtonUncheckedIcon />
        <ChevronRightIcon className={classes.arrowRigt} />
      </IconButton>
    </div>
  );
};
