import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OctoLogo from '../assets/octoLogoNew.svg';
import OctoLogoName from '../assets/Logoocto2.svg'
import Fade from 'react-reveal/Fade';
import YouTube from 'react-youtube';

const styles = makeStyles((theme) => ({
  container: {
    // backgroundColor: '#F7F8FA',
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
    width: 700,
    '@media (max-width: 760px)': {
      width: 350,
    },
  },
  logoName: {
    width: 450,
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 200,
    overflow: 'hidden',
  }
}));

const DescriptionHome = ({ content }) => {
  const {description} = content;
  const classes = styles();
  const opts = {
    width: 750,
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
          <div className={classes.imgContainer}>
            <OctoLogoName className={classes.logoName} />
          </div>
        </Fade>
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
        <OctoLogo className={classes.logo} />
        <Typography variant="h2" className={classes.description}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DescriptionHome
