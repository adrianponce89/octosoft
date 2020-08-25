import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  itemAvatar: {
    padding: 20,
  },
  iconAvatar: {
    width: 160,
    height: 160,
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
    '@media (max-width: 360px)': {
      width: 110,
      height: 110,
    },
    background: (props) => props.background || '#ECECEC',
    backgroundSize: (props) => props.backgroundSize || 'cover',
    backgroundPosition: (props) =>
      props.backgroundPosition || 'center',
  },
  descriptionAvatars: {
    background: '#ECECEC',
    marginTop: 15,
    padding: 5,
    width: 150,
    height: 65,
    '@media (max-width: 360px)': {
      fontSize: '3vw',
      width: 100,
      height: 55,
    },
    overflow: 'hidden',
    textAlign: 'center',
  },
});

const Avatar = (props) => {
  const classes = styles(props);
  return (
    <div>
      <Grid
        container
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
          {props.name}
        </Grid>
      </Grid>
    </div>
  );
};

export default Avatar;
