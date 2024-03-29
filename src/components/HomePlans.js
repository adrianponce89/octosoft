import React, {useState} from 'react'
import { Grid, Typography, ButtonGroup,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlanCard from './PlanCard';
import HomeForm from './HomeForm';

const styles = makeStyles((theme) => ({
  plans: {
    backgroundColor: '#F7F8FA',
    paddingTop: 60,
    paddingBottom: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 760px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  package: {
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 760px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  root: {
    marginBottom: 60,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 760px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'space-between',
    },
  },
  title: {
    color: '#000000',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontWeight: 700,
    '@media (max-width: 760px)': {
      fontSize: 24,
      paddingBottom: 20,
    },
  },
  buttonSelected: {
    borderRadius: '50px !important',
    backgroundColor: '#D437AD !important',
    padding: '15px',
    '&:hover': {
      backgroundColor: '#D437AD',
    },
    // '&:focus':{
    //   backgroundColor: 'yellow',
    // }
  },
  textBtnSelected: {
    color: '#FFFF',
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '15px',
    '&:hover': {
      backgroundColor: '#FFFF',
    },
  },
  textBtn: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
}));

const HomePlans = ({ plans }) => {
  const classes = styles();
  const [showPackages, setShowPackages] = useState(true);
  const [packageView, setPackageView] = useState(true);

  return (
    <Grid container md={12} className={classes.plans}>
      <Grid container item md={8} xs={12} className={classes.root}>
        <Typography className={classes.title}>
          Select your plan
        </Typography>
        <div>
          <Button
            className={
              showPackages ? classes.buttonSelected : classes.button
            }
            onClick={() => {
              setPackageView(true);
              setShowPackages(true);
            }}
          >
            <Typography
              className={
                showPackages
                  ? classes.textBtnSelected
                  : classes.textBtn
              }
            >
              PACKAGE
            </Typography>
          </Button>
          <Button
            className={
              showPackages ? classes.button : classes.buttonSelected
            }
            onClick={() => {
              setPackageView(false);
              setShowPackages(false);
            }}
          >
            <Typography
              className={
                showPackages
                  ? classes.textBtn
                  : classes.textBtnSelected
              }
            >
              CUSTOM
            </Typography>
          </Button>
        </div>
      </Grid>
      {packageView ? (
        <Grid
          container
          item
          xs={10}
          md={10}
          xl={8}
          className={classes.package}
        >
          {plans.slice(12, 15).map((plan, i) => {
            return (
              <PlanCard
                plan={plan}
                index={i}
                choosePlan={setPackageView}
              />
            );
          })}
        </Grid>
      ) : (
        <HomeForm plans={plans} />
      )}
    </Grid>
  );
};

export default HomePlans
