import React, {useState} from 'react'
import { Grid, Typography, ButtonGroup,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlanCard from './PlanCard';
import HomeForm from './HomeForm';

const styles = makeStyles((theme) => ({
  plans: {
    // backgroundColor: '#F7F8FA',
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
    // flexDirection: 'column',
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
    fontFamily: 'Montserrat',
    fontSize: 42,
    '@media (max-width: 760px)': {
      fontSize: 32,
      paddingBottom: 20,
    },
  },
  buttonSelected: {
    borderRadius: '50px !important',
    backgroundColor: '#BB6DC7',
    padding: '15px',
    '&:hover': {
      backgroundColor: '#BB6DC7',
    },
  },
  btnPackageSelected: {
    borderRadius: '50px !important',
    backgroundColor: '#0C3294',
    padding: '15px',
    '&:hover': {
      backgroundColor: '#0C3294',
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
  const [showPackages, setShowPackages] = useState(false);
  const [view, setView] = useState('PACKAGE_VIE');

  const changeView = (text) => {
    switch (text) {
      case 'PACKAGE_VIEW':
        setView('PACKAGE_VIEW');
        break;
      case 'CUSTOM_VIEW':
        setView('CUSTOM_VIEW');
        break;
    }
    setShowPackages(!showPackages);
  };

  return (
    <Grid container md={12} className={classes.plans}>
      <Grid container item md={8} className={classes.root}>
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
              showPackages
                ? classes.btnPackageSelected
                : classes.button
            }
            onClick={() => {
              changeView('PACKAGE_VIEW');
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
              changeView('CUSTOM_VIEW');
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
      {view === 'PACKAGE_VIEW' ? (
        <Grid container item md={8} className={classes.package}>
          {plans.slice(6, 9).map((plan, i) => {
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
