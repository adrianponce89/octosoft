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
  },
  root: {
    marginBottom: 60,
    padding: 20,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 42,
  },
  buttonSelected: {
    borderRadius: '50px !important',
    
    backgroundColor: '#1d2178',
    padding: '15px',
    '&:hover': {
      backgroundColor: '#1d2178',
    },
  },
  textBtnSelected: {
    color: '#37add4',
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

const plans = [
  {
    price: '1999',
    type: 'StartUp',
    content: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
  },
  {
    price: '1999',
    type: 'StartUp',
    content: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
  },
  {
    price: '1999',
    type: 'StartUp',
    content: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
  },
];

const HomePlans = () => {
    const classes = styles();
    const [showPackages, setShowPackages] = useState(false)
    const [view, setView] = useState('PACKAGE_VIE');


    const changeView = (text) => {
      switch(text){
        case 'PACKAGE_VIEW':
        setView('PACKAGE_VIEW');
        break;
        case 'CUSTOM_VIEW':
          setView('CUSTOM_VIEW');
          break;
      }
      setShowPackages(!showPackages);
    }

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        md={12}
        className={classes.plans}
      >
        <Grid
          container
          item
          md={8}
          justify="space-between"
          alignItems="center"
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
              onClick={()=>{changeView('PACKAGE_VIEW')}}
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
              onClick={()=>{changeView('CUSTOM_VIEW')}}
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
          <Grid
            container
            item
            md={8}
            justify="space-between"
            alignItems="center"
          >
            {plans.map((plan, i) => {
              return <PlanCard plan={plan} index={i} />;
            })}
          </Grid>
        ) : (
          <HomeForm />
        )}
      </Grid>
    );
}

export default HomePlans
