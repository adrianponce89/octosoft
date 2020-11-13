import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from '@reach/router';
import { Grid, Typography } from '@material-ui/core';
import Plan from './Plans';

const styles = makeStyles((theme) => ({
  headTitle: {
    fontSize: 40,
    textAlign: 'center',
    lineHeight: '38px',
  },
  headSubTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  keypad: {
    margin: 'auto',
  },
  button: {
    margin: 10,
    cursor: 'pointer',
    height: 50,
    background: '#fff',
    boxShadow: theme.boxShadow,
    borderRadius: theme.borderRadius,
  },
  highlightedButton: {
    boxShadow: `inset 0 0 0 2px #007bff, ${theme.boxShadow}`,
  },
  buttonText: {
    width: '50%',
    fontWeight: 'bolder',
    '@media (max-width: 576px)': {
      fontSize: '3.3vw',
    },
  },
  highlightedButton: {
    boxShadow: `inset 0 0 0 2px #007bff, ${theme.boxShadow}`,
  },
  infoContainer: {
    margin: '40px auto 40px auto',
    padding: '20px 0 20px 0',
    boxShadow: theme.boxShadow,
    borderRadius: theme.borderRadius,
  },
  iconsDescriptions: {
    width: 250,
    height: 250,
    fill: (props) => props.fill,
    transition: 'fill 1.1s ease',
  },
  titleDescriptions: {
    margin: '20px 0 20px 0',
    fontSize: 27,
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  containerCard: {
    padding: '3vh',
    justifyContent: 'center',
    width: '100%',
  },
  containerPlans: { paddingTop: '2em' },
  titleType: {
    fontFamily: 'Lato',
    fontSize: '38px',
    marginTop: '38px',
    textAlign: 'center',
  },
}));

const Ourplans = ({ plans, title }) => {
  const classes = styles();
  const [index, selectedIndex] = useState(0);

  const navigate = useNavigate();

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

  const sortPlans = SortPlans(plans);

  const selectPlan = (s) => {
    const newIndex = sortPlans.findIndex(
      (plans) => plans.type.toLowerCase() === s.toLowerCase(),
    );
    if (newIndex >= 0) {
      selectedIndex(newIndex);
    }
  };

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>{title}</h1>
      </Grid>
      <Grid
        container
        item
        justify="center"
        md={10}
        xs={12}
        className={classes.keypad}
      >
        {sortPlans.map(({ type }, i) => (
          <Grid
            container
            justify="center"
            alignItems="center"
            xs={6}
            md={3}
            key={i}
            onClick={() => {
              selectPlan(type.toLowerCase());
            }}
          >
            <Grid
              container
              justify="space-evenly"
              alignItems="center"
              className={`${classes.button} ${
                i === index ? classes.highlightedButton : ''
              }`}
            >
              <div className={classes.buttonText}>{`${type}`}</div>
            </Grid>
          </Grid>
        ))}
      </Grid>
      {
        <Grid item container justify="center" xs={12}>
          <Typography variant="h1" className={classes.titleType}>
            {sortPlans[index].type}
          </Typography>
          <Grid
            container
            spacing={7}
            justify="space-around"
            direction="row"
            className={classes.containerPlans}
          >
            {sortPlans[index].plans.map(({ node }, i) => (
              <Plan
                key={i}
                imagePlan={`url(${node.image.file.url})`}
                title={node.title}
                description={node.description}
                amount={node.amount}
                link={node.link}
              />
            ))}
          </Grid>
        </Grid>
      }
    </>
  );
};

export default Ourplans;
