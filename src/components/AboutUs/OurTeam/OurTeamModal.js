import React from 'react';
import {
  Typography,
  Grid,
  IconButton,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import SocialNetwork from '../../SocialNetwork';

const styles = makeStyles({
  containerImg: {
    position: 'relative',
    height: '100%',
    margin: 0,
    marginRight: 24,
    padding: 0,
  },
  imageMember: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundImage: ({ background }) =>
      background ? background : '#ECECEC',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '16px 0 0 16px',
    '@media (max-width: 560px)': {
      display: 'none',
    },
  },
  container: {
    position: 'relative',
    width: '90vw',
    height: '90vh',
    maxWidth: 1024,
    borderRadius: 16,
    background: '#F1F1F1',
  },
  closeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    background: 'transparent',
    border: 'none',
    color: '#FF0077',
    cursor: 'pointer',
  },
  closeIcon: {
    fontSize: '2vmax',
    padding: 10,
    '@media (max-width: 560px)': {
      fontSize: '4vmin',
    },
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: '2em',
    fontWeight: 500,
    color: '#26A1FF',
    textTransform: 'capitalize',
    '@media (max-width: 1024px)': {
      fontSize: '2vmax',
    },
    '@media (max-width: 560px)': {
      fontSize: '4.5vmin',
    },
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    fontWeight: 500,
    color: '#26A1FF',
  },
  descriptionBiography: {
    background: 'transparent',
    width: '100%',
    '& p': {
      fontFamily: 'Poppins',
      lineHeight: '1.6em',
      fontSize: '1em',
      margin: 4,
      '@media (max-width: 1256px)': {
        lineHeight: '1.5em',
        fontSize: '1.2vmax',
      },
      '@media (max-width: 560px)': {
        lineHeight: '1.5em',
        fontSize: '2.6vmin',
      },
    },
  },
  button: {
    backgroundColor: '#26A1FF',
    borderRadius: 16,
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: 500,
  },
});

const OurTeamModal = ({
  name,
  onClose,
  background,
  biography,
  socialMedia,
}) => {
  const classes = styles({ background });
  return (
    <Grid
      container
      alignItems="center"
      direction="row"
      className={classes.container}
    >
      <Grid item xs={4} className={classes.containerImg}>
        <div className={classes.imageMember} />
      </Grid>

      <Grid item container xs={12} md={7} direction="column">
        <Typography variant="h1" className={classes.title}>
          {name}
        </Typography>
        <Grid item xs={12} className={classes.descriptionBiography}>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(biography.json),
            }}
          />
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={8}>
            <Typography variant="caption" className={classes.text}>
              {`Follow ${name} on Social Mededia:`}
            </Typography>
            <SocialNetwork socialMedia={socialMedia} />
          </Grid>

          <Grid item xs={3}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={onClose}
            >
              <Typography
                variant="button"
                className={classes.textButton}
              >
                Back to Our Team!
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <IconButton
        onClick={onClose}
        className={classes.closeContainer}
      >
        <CloseIcon className={classes.closeIcon} />
      </IconButton>
    </Grid>
  );
};

export default OurTeamModal;
