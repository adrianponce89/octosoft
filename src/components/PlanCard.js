import React from 'react'
import { Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ index }) => {
      switch (index) {
        case 0:
          return '#F34604';
          break;
        case 1:
          return '#1d2178';
          break;
        case 2:
          return '#FF9929';
          break;
      }
    },
    width: 300,
    height: 500,
  },
  content: {
    padding: 20,
    marginLeft: -20,
    marginTop: -20,
    backgroundColor: '#FFFF',
    height: 450,
  },
  choose: {
    textAlign: 'left',
    marginLeft: 15,
    color: '#FFFF',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 22,
  },
  price: {
    textAlign: 'left',
    color: '#1d2178',
    fontFamily: 'Montserrat',
    fontSize: 40,
    marginRight: 20,
  },
  month: {
    textAlign: 'left',
    color: 'grey',
    fontFamily: 'Montserrat',
    fontSize: 24,
  },
  descriptionContainer: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom:40,
  },
  description: {
    textAlign: 'left',
    color: 'grey',
    fontFamily: 'Montserrat',
  },
  descriptionTitle: {
    height: 60,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  type: {
    textAlign: 'left',
    color: '#1d2178',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 30,
  },
}));

const PlanCard = ({plan, index}) => {
    const classes = styles({index});
    return (
      <Grid item container className={classes.root}>
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          md={11}
          className={classes.content}
        >
          <div className={classes.descriptionTitle}>
            <Typography className={classes.price}>
              {`$${plan.price}`}
            </Typography>
            <Typography className={classes.month}>/month</Typography>
          </div>
          <Typography className={classes.type}>
            {plan.type}
          </Typography>
          <Divider/>
          <div className={classes.descriptionContainer}>
            {plan.content.map((text) => {
              return (
                <Typography className={classes.description}>
                  {text}
                </Typography>
              );
            })}
          </div>
        </Grid>
        <Typography className={classes.choose}>
          CHOOSE PLAN
        </Typography>
      </Grid>
    );
}

export default PlanCard;

