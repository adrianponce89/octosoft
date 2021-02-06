import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles({
  imageMember: {
    width: '100%',
    height: '100%',
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
    '@media (max-width: 360px)': {
      width: 210,
      height: 210,
    },
    backgroundImage: ({ background }) => background || '#ECECEC',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  container: {
    display: 'flex',
    width: '70vw',
    height: '70vh',
    maxWidth: 1024,
    background: '#ccc',
  },
  titlesContainer: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
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
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '@media (max-width: 360px)': {
      fontSize: '6vw',
    },
  },
  descriptionBiography: {
    background: 'transparent',
    width: '100%',
    '& p': {
      lineHeight: '1.5em',
      fontSize: '2.1vmin',
      margin: 4,
    },
  },
});

const OurTeamModal = ({ name, onClose, background, biography }) => {
  const classes = styles({ background });
  return (
    <div className={classes.container}>
      <Grid
        container
        item
        xs={12}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={5} className={classes.imageMember} />

        <Grid
          item
          container
          xs={7}
          direction="column"
          justify="flex-start"
        >
          <Grid item xs={7}>
            <Typography className={classes.name}>{name}</Typography>
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
    </div>
  );
};

export default OurTeamModal;
