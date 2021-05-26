import React from 'react';
import {
  Typography,
  Grid,
  IconButton,
  Button,
  Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import SocialNetwork from '../../SocialNetwork';

const styles = makeStyles((theme) => ({
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
  },
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    maxWidth: 1024,
    borderRadius: 16,
    background: '#F1F1F1',
    '@media (max-width: 586px)': {
      padding: 12,
      height: '100%',
      width: '90vw',
    },
  },
  closeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
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
  box: { padding: theme.spacing(8, 0, 0) },
  titleName: {
    fontFamily: 'Poppins',
    fontSize: '2em',
    fontWeight: 500,
    color: '#26A1FF',
    textTransform: 'capitalize',
    '@media (max-width: 1024px)': {
      fontSize: '2vmax',
    },
    '@media (max-width: 585px)': {
      fontSize: '5vmin',
    },
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    fontWeight: 500,
    color: '#26A1FF',
    marginBottom: theme.spacing(4),
  },
  descriptionBiography: {
    background: 'transparent',
    '& p': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      lineHeight: 1.6,
      fontSize: '.90em',
      '@media (max-width: 1256px)': {
        fontSize: '1.2vmax',
      },
      '@media (max-width: 585px)': {
        fontSize: '2.6vmax',
      },
      '@media (max-width: 565px)': {
        fontSize: '2.6vmin',
      },
    },
  },
  button: {
    margin: theme.spacing(4),
    backgroundColor: '#26A1FF',
    borderRadius: 16,
  },
  textButton: {
    padding: theme.spacing(2),
    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: 500,
    textTransform: 'capitalize',
  },
}));

const OurTeamModal = ({
  name,
  onClose,
  background,
  biography,
  socialMedia,
}) => {
  const classes = styles({ background });
  const even = (even) => even !== '';
  return (
    <Grid container alignItems="center" className={classes.container}>
      <IconButton
        onClick={onClose}
        className={classes.closeContainer}
      >
        <CloseIcon className={classes.closeIcon} />
      </IconButton>
      <Hidden smDown>
        <Grid item xs={4} className={classes.containerImg}>
          <div className={classes.imageMember} />
        </Grid>
      </Hidden>

      <Grid
        item
        md={7}
        container
        direction="column"
        className={classes.box}
      >
        <Typography variant="h1" className={classes.titleName}>
          {name}
        </Typography>
        <Grid
          item
          xs={11}
          sm={12}
          className={classes.descriptionBiography}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(biography.json),
            }}
          />
        </Grid>
        <Grid
          item
          xs={11}
          container
          justify="center"
          alignItems="center"
          wrap="wrap"
        >
          <Grid item sm={9} container alignItems="center">
            {Object.values(socialMedia).some(even) ? (
              <Typography variant="caption" className={classes.text}>
                {`Follow ${name} on Social Media:`}
              </Typography>
            ) : null}
            <SocialNetwork socialMedia={socialMedia} />
          </Grid>

          <Grid item xs={8} sm={3}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={onClose}
              fullWidth
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
    </Grid>
  );
};

export default OurTeamModal;
