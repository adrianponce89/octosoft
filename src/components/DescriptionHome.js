import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OctoLogoNew from '../assets/newLogo.svg'
import Fade from 'react-reveal/Fade';
import YouTube from 'react-youtube';

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
    width: 160,
    height: 160,
    marginRight: 20,
    '@media (max-width: 760px)': {
      width: 150,
      height: 150,
      marginRight: 0,
    },
  },
  description: {
    width: 600,
    fontFamily: 'Montserrat',
    fontSize: 22,
    '@media (max-width: 760px)': {
      fontSize: 18,
      textAlign: 'center',
    },
    '@media (max-width: 1368px)': {
      fontSize: 20,
      textAlign: 'center',
    },
  },
  video: {
    width: 530,
    height: 300,
    '@media (max-width: 760px)': {
      width: 330,
      height: 200,
    },
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 200,
    overflow: 'hidden',
  },
}));

const DescriptionHome = ({ content }) => {
  const {description} = content;
  const classes = styles();
  const opts = {
    width: 530,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 1,
      showinfo: 1,
      modestbranding: 1,
      disablekb: 1,
      color:'white',
    },
  };
  return (
    <Grid
      container
      className={classes.container}
      flexDirection="column"
      justify="center"
      alignItems="center"
      md={12}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        
        <Fade bottom>
          <YouTube
            videoId="0uqkxOcoehc"
            opts={opts}
            className={classes.video}
          />
        </Fade>
      </Grid>

      <Grid
        container
        className={classes.container}
        flexDirection="row"
        justify="center"
        alignItems="center"
        md={12}
      >
        <OctoLogoNew className={classes.logo} />
        <Typography variant="h2" className={classes.description}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DescriptionHome
