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
    height: 70,
    background: '#eee',
    boxShadow: 'inset -9px -6px 8px 1px #00000061',
  },
  buttonInside: {
    cursor: 'pointer',
    height: 70,
    backgroundColor: '#007bff',
    boxShadow: 'inset -9px -6px 8px 1px #00000061',
  },
  colorOne: { backgroundColor: '#0c3293' },
  colorTwo: { backgroundColor: '#1d2178' },
  buttonText: {
    fontWeight: 'bolder',
    '@media (max-width: 576px)': {
      fontSize: '2.3vw',
      padding: 0,
    },

    textAlign: 'center',
  },
  buttonInsideText: {
    width: '60%',
    fontWeight: 'bolder',
    fontSize: '20px',
    color: '#eee',
    '@media (max-width: 576px)': {
      fontSize: '2.3vw',
      padding: 0,
    },

    textAlign: 'center',
  },
  highlightedButton: {
    boxShadow: 'inset -9px -6px 8px 1px #00000061',
    background: '#fff',
    paddingBottom: 2,
    zIndex: 100,
  },
  highlightedInsideButton: {
    zIndex: 100,
    '& div': {
      textShadow:
        '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black',
    },
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
    paddingTop: '2em',
    margin: 0,
    background: '#fff',
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
  const [idPlan, selectedIdPlan] = useState(0);

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
              justify="center"
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
            justify="center"
            direction="row"
            className={classes.containerPlans}
          >
            <Hidden xsDown>
              <Grid
                container
                direction="row"
                justify="center"
                alignContent="center"
              >
                {sortPlans[index].plans.map(({ node }, i) => (
                  <Grid
                    item
                    container
                    xs={4}
                    justify="center"
                    alignItems="center"
                    key={i}
                    onClick={() => {
                      selectedIdPlan(i);
                    }}
                    className={`${classes.buttonInside} ${
                      i === 1
                        ? classes.colorOne
                        : i === 2
                        ? classes.colorTwo
                        : ''
                    } ${
                      i === idPlan
                        ? classes.highlightedInsideButton
                        : ''
                    }`}
                  >
                    <div
                      className={classes.buttonInsideText}
                    >{`${node.title}`}</div>
                  </Grid>
                ))}
              </Grid>
              <Plan
                description={
                  sortPlans[index].plans[idPlan].node.description
                }
                amount={sortPlans[index].plans[idPlan].node.amount}
                link={sortPlans[index].plans[idPlan].node.link}
              />
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
