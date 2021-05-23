import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    borderRadius: 16,
    margin: theme.spacing(4),
    width: 'fit-content',
  },
  itemAvatar: {
    padding: theme.spacing(4),
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
    color: '#0024B5',
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
    width: '100%',
    height: '100%',
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
    background: ({ background }) => background || '#ECECEC',
    backgroundSize: ({ backgroundSize }) => backgroundSize || 'cover',
    backgroundPosition: ({ backgroundPosition }) =>
      backgroundPosition || 'center',
    paddingBottom: '100%',
  },
  descriptionAvatars: {
    padding: 5,
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
  },
  button: {
    background: 'linear-gradient(45deg, #5AB7FF, #0080FF);',
    borderRadius: 8,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  containerButton: { marginTop: theme.spacing(4) },
}));

const Avatar = ({
  background,
  backgroundSize,
  backgroundPosition,
  onClick,
  name,
  title,
  section,
}) => {
  const classes = useStyle({
    background,
    backgroundSize,
    backgroundPosition,
  });
  return (
    <Paper elevation={3} square className={classes.root}>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        className={classes.itemAvatar}
      >
        <Grid item xs={12} className={classes.iconAvatar} />
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
          <Grid
            item
            xs={7}
            sm={8}
            className={classes.containerButton}
          >
            <Button
              variant="contained"
              fullWidth
              className={classes.button}
              onClick={onClick}
            >
              <Typography
                variant="caption"
                className={classes.textButton}
              >
                Profile
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Avatar;
