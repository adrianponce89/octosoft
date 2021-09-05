import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OctoLogo from '../assets/logoHome.svg';
import videoTest from '../assets/videotest.mp4';
const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#F7F8FA',
    paddingTop: 60,
    paddingBottom: 60,
    '@media (max-width: 760px)': {
      padding: '40px 20px',
    },
  },
  root: {
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
    '@media (max-width: 760px)': {
      width: 150,
      height: 150,
    },
  },
  description: {
    width: 600,
    fontFamily: 'Montserrat',
    fontSize: 26,
    '@media (max-width: 760px)': {
      fontSize: 18,
      textAlign: 'center',
    },
  },
  video: {
    width: 650,
    '@media (max-width: 760px)': {
      width: 350
    },
  },
}));

const DescriptionHome = ({ content }) => {
  console.log('hola', content);
  const {description} = content.description;
  const { file } = content.image;
  const classes = styles();
  return (
    <Grid
      container
      className={classes.container}
      flexDirection="column"
      justify="center"
      alignItems="center"
      md={12}
    >
      <video className={classes.video} autoPlay loop muted>
        <source src={videoTest} type="video/mp4"></source>
      </video>
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
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DescriptionHome
