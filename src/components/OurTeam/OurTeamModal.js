import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import SocialNetwork from '../SocialNetwork';

const styles = makeStyles({
  imageMember: {
    display: 'block',
    width: '60vw',
    height: '80vh',
    maxHeight: 500,
    backgroundImage: ({ background }) => background || '#ECECEC',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 560px)': {
      display: 'none',
    },
  },
  container: {
    width: '90vw',
    height: '90vh',
    maxWidth: 1024,
    background: '#ccc',
    padding: '2em 1em 2em',
    flexWrap: 'nowrap',
  },
  closeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    background: 'transparent',
    border: 'none',
    color: '#888',
    cursor: 'pointer',
    '&:hover': {
      color: '#444',
    },
  },
  closeIcon: {
    fontSize: '2vmax',
    padding: 10,
    '@media (max-width: 560px)': {
      fontSize: '4vmin',
    },
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '@media (max-width: 1024px)': {
      fontSize: '2vmax',
    },
    '@media (max-width: 560px)': {
      fontSize: '4.5vmin',
    },
  },
  descriptionBiography: {
    background: 'transparent',
    width: '100%',
    '& p': {
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
});

const OurTeamModal = ({
  name,
  onClose,
  background,
  biography,
  instagram,
  facebook,
  twitter,
  github,
  web,
}) => {
  const classes = styles({ background });
  return (
    <>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        direction="row"
        className={classes.container}
      >
        <Grid item md={4} className={classes.imageMember} />

        <Grid
          item
          container
          xs={12}
          md={8}
          direction="column"
          style={{ paddingLeft: '1em' }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h1" className={classes.title}>
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SocialNetwork
              instagram={instagram}
              facebook={facebook}
              twitter={twitter}
              github={github}
              web={web}
            />
          </Grid>
          <Grid item xs={11} className={classes.descriptionBiography}>
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(biography.json),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <button
        className={classes.closeContainer}
        encodeURIComponent
        onClick={onClose}
      >
        <CloseIcon className={classes.closeIcon} />
      </button>
    </>
  );
};

export default OurTeamModal;
