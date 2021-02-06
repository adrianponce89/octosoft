import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = makeStyles({
  itemAvatar: {
    padding: 20,
  },
  name: {
    width: '100%',
    fontSize: 20,
    textTransform: 'uppercase',
    '@media (max-width: 360px)': {
      fontSize: '6vw',
    },
  },
  title: {
    fontWeight: 'bold',
    color: '#1d2178',
    width: '100%',
    fontSize: 20,
    '@media (max-width: 360px)': {
      fontSize: '5vw',
    },
  },
  section: {
    fontWeight: 'bold',
    width: '100%',
    fontSize: 16,
    '@media (max-width: 360px)': {
      fontSize: '4vw',
    },
  },
  iconAvatar: {
    width: 260,
    height: 260,
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
    '@media (max-width: 360px)': {
      width: 210,
      height: 210,
    },
    background: ({ background }) => background || '#ECECEC',
    backgroundSize: ({ backgroundSize }) => backgroundSize || 'cover',
    backgroundPosition: ({ backgroundPosition }) =>
      backgroundPosition || 'center',
  },
  descriptionAvatars: {
    background: '#ECECEC',
    marginTop: 15,
    padding: 5,
    width: 250,
    height: 100,
    '@media (max-width: 360px)': {
      width: 200,
      height: 100,
    },
    overflow: 'hidden',
    textAlign: 'center',
  },
});

const Avatar = ({
  background,
  backgroundSize,
  backgroundPosition,
  onClick,
  name,
  title,
  section,
}) => {
  const classes = styles({
    background,
    backgroundSize,
    backgroundPosition,
  });
  return (
    <div onClick={onClick}>
      <Grid
        container
        item
        md={3}
        xs={6}
        direction="column"
        alignItems="center"
        className={classes.itemAvatar}
      >
        <Grid className={classes.iconAvatar}></Grid>
        <Grid
          container
          justify="center"
          alignContent="center"
          className={classes.descriptionAvatars}
        >
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.section}>
            {section}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Avatar;
