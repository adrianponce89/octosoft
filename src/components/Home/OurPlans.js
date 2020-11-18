import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from '@reach/router';
import { Grid, Hidden } from '@material-ui/core';
import Plan from '../Plans';
import PlansSlider from './PlansSlider';

const styles = makeStyles((theme) => ({
  keypad: {
    margin: 'auto',
    marginTop: -5,
  },
  button: {
    cursor: 'pointer',
    height: 50,
    background: '#eee',
    boxShadow: theme.boxShadow,
    borderTopLeftRadius: theme.borderRadius,
    borderTopRightRadius: theme.borderRadius,
  },
  buttonText: {
    width: '50%',
    fontWeight: 'bolder',
    '@media (max-width: 576px)': {
      fontSize: '2.3vw',
      padding: 0,
    },

    textAlign: 'center',
  },
  highlightedButton: {
    borderTop: '2px solid #007bff',
    borderLeft: '2px solid #007bff',
    borderRight: '2px solid #007bff',
    boxShadow: 'none',
    background: '#fff',
    paddingBottom: 2,
    zIndex: 100,
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
  containerPlans: {
    // paddingTop: '2em',
    padding: 0,
    margin: 0,
    background: '#fff',
    boxShadow: theme.boxShadow,
    borderBottomLeftRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius,
  },
  titleType: {
    fontFamily: 'Montserrat',
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
      <Grid
        container
        item
        justify="center"
        xs={12}
        className={classes.keypad}
      >
        {sortPlans.map(({ type }, i) => (
          <Grid
            container
            justify="center"
            alignItems="center"
            xs={3}
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
          <Grid
            container
            spacing={5}
            justify="space-around"
            direction="row"
            className={classes.containerPlans}
          >
            <Hidden xsDown>
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
            </Hidden>
            <Hidden smUp>
              <PlansSlider plans={sortPlans[index].plans} />
            </Hidden>
          </Grid>
        </Grid>
      }
    </>
  );
};

export default Ourplans;
