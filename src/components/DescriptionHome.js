import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OctoLogoNew from '../assets/newLogo.svg'
import OctoLogoName from '../assets/Logoocto2.svg';
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
  logoNew: {
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
    fontSize: 16,
    lineHeight: '30px',
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
      width: 300,
      height: 190,
    },
  },
  mediaContainer: {
    marginBottom: -250,
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 200,
    // overflow: 'hidden',
    position: 'relative',
    top: -250,
  },
  videoContainer: {
    position: 'relative',
    top: -250,
  },
  logoName: {
    width: 310,
  },
}));

const DescriptionHome = ({ content }) => {
  const {description} = content;
  const classes = styles();
  const opts = {
    width: 530,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
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
        className={classes.mediaContainer}
      >
        <div className={classes.imgContainer}>
          <div>
            <OctoLogoName className={classes.logoName} />
          </div>
        </div>
        <div
          className={classes.videoContainer}
        >
          <YouTube
            videoId="0uqkxOcoehc"
            opts={opts}
            className={classes.video}
          />
        </div>
      </Grid>

      <Grid
        container
        className={classes.container}
        flexDirection="row"
        justify="center"
        alignItems="center"
        md={12}
      >
        <OctoLogoNew className={classes.logoNew} />
        <Typography variant="h2" className={classes.description}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DescriptionHome
