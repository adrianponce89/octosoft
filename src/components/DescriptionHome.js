import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OctoLogo from '../assets/logoHome.svg';

const styles = makeStyles((theme) => ({
  container: { backgroundColor: '#F7F8FA', paddingTop:60, paddingBottom:60 },
  root: {
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  description: {
    width: 600,
    fontFamily: 'Montserrat',
    fontSize: 26,
  },
}));

const DescriptionHome = () => {
    const classes = styles()
    return (
      <Grid
        container
        className={classes.container}
        flexDirection="row"
        justify="center"
        alignItems="center"
        md={12}
      >
        <OctoLogo className={classes.logo} />
        <Typography variant="h2" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent sed luctus erat. Mauris vehicula gravida tempus.
          Phasellus nisi sem, condimentum ut dui ac, consequat finibus
          dolor.
        </Typography>
      </Grid>
    );
}

export default DescriptionHome
