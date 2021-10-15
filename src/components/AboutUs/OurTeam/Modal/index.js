import React from 'react';
import { Typography, Grid, Button, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import SocialNetwork from '../../../SocialNetwork';
import CornerTopRight from '../../../../assets/Trama2.png';
import CornerBottomRight from '../../../../assets/octoOrang.png';

const OurTeamModal = ({
  name,
  onClose,
  background,
  biography,
  socialMedia,
}) => {
  const classes = useStyles({ background });
  const even = (even) => even !== '';
  return (
    <Grid
      item
      container
      justify="flex-end"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={4} className={classes.imageMember} />
      <Grid item xs={4} className={classes.cornerTopRight} />

      <Grid
        item
        xs={8}
        container
        direction="column"
        className={classes.box}
      >
        <Grid item xs={10}>
          <Typography variant="h1" className={classes.titleName}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionBiography}>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(biography.json),
            }}
          />
        </Grid>
        <Grid
          item
          xs={10}
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
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justify="flex-end"
        className={classes.boxButton}
      >
        <div className={classes.cornerBottomRight} />
        <Button
          variant="contained"
          className={classes.button}
          onClick={onClose}
        >
          <Typography
            variant="subtitle1"
            className={classes.textButton}
          >
            Back
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderRadius: 16,
    background: '#F1F1F1',
    overflow: 'hidden',
    height: '80vh',
  },
  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${CornerTopRight})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '23%',
    height: '98%',
    backgroundImage: `url(${CornerBottomRight})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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
  },
  box: { position: 'relative' },
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
  boxButton: { position: 'relative' },
  button: {
    margin: theme.spacing(4),
    backgroundColor: '#26A1FF',
    boxShadow: '4px 0 0 #969390e6',
    borderRadius: 8,
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: 500,
    textTransform: 'capitalize',
    fontSize: theme.spacing(4.5),
  },
}));

export default OurTeamModal;
