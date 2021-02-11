import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles({
  imageMember: {
    display: 'block',
    width: '60vw',
    height: '85vh',
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
    padding: '0.5em 1em 1em',
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
    fontSize: 40,
    padding: 10,
    '@media (max-width: 560px)': {
      fontSize: '6vw',
    },
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '@media (max-width: 560px)': {
      fontSize: '6vw',
    },
  },
  descriptionBiography: {
    background: 'transparent',
    width: '100%',
    '& p': {
      lineHeight: '1.6em',
      fontSize: '2.67vmin',
      margin: 4,
      '@media (max-width: 560px)': {
        lineHeight: '1.5em',
        fontSize: '1 em',
      },
    },
  },
});

const OurTeamModal = ({ name, onClose, background, biography }) => {
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
        <Grid item xs={4} className={classes.imageMember} />

        <Grid
          item
          container
          xs={12}
          md={8}
          direction="column"
          style={{ paddingLeft: '1em' }}
        >
          <Grid item xs={12} md={6}>
            <Typography className={classes.title}>{name}</Typography>
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
