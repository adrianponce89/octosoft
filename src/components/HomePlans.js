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
    justifyContent: 'space-between',
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
    color: '#231D4F',
    fontFamily: 'Montserrat',
    fontSize: 42,
    '@media (max-width: 760px)': {
      fontSize: 32,
      paddingBottom: 20,
    },
  },
  buttonSelected: {
    borderRadius: '50px !important',
    backgroundColor: '#D437AD',
    padding: '15px',
    '&:hover': {
      backgroundColor: '#D437AD',
    },
  },
  textBtnSelected: {
    color: '#FFFF',
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#FFFF',
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
      <Grid
        container
        item
        xl={8}
        lg={10}
        xs={12}
        className={classes.root}
      >
        <Typography className={classes.title}>
          Select your plan
        </Typography>
        <ButtonGroup
          disableElevation
          variant="contained"
          color="primary"
        >
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
        </ButtonGroup>
      </Grid>
      {packageView ? (
        <Grid container item md={8} className={classes.package}>
          {plans.slice(12, 15).map((plan, i) => {
            return <PlanCard plan={plan} index={i} />;
          })}
        </Grid>
      ) : (
        <HomeForm />
      )}
    </Grid>
  );
};

export default HomePlans
