import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  containerPost: {
    '@media (max-width: 476px)': {
      height: '45vh',
    },
  },
  containerPicPost: {
    display: 'flex',
  },
  picPost: {
    margin: 15,
    flex: 1,
    background: (props) => props.background,
    backgroundSize: (props) => props.backgroundSize || 'cover',
    height: '50vh',
    '@media (max-width: 576px)': {
      height: '25vh',
    },
  },
  titlePost: {
    margin: '0 15px',
    '@media (max-width: 576px)': {
      fontSize: '3.3vw',
    },
  },
  descriptionPost: {
    height: '9vh',
    margin: '15px',
    fontSize: '9px',
    lineHeight: '12px',
    overflow: 'hidden',
  },
  textButton: {
    color: '#41a0ff',
  },
});

const Post = (props) => {
  const classes = styles(props);
  return (
    <Grid item>
      <Paper elevation={3} className={classes.containerPost}>
        <div className={classes.containerPicPost}>
          <Paper className={classes.picPost}></Paper>
        </div>
        <h2 className={classes.titlePost}>{props.title}</h2>
        <Grid container direction="row">
          <Grid item md={10} xs={9}>
            <p className={classes.descriptionPost}>
              {props.description}
            </p>
          </Grid>
          <Grid
            container
            md={2}
            xs={3}
            justify="center"
            alignItems="flex-end"
          >
            <p className={classes.textButton}>Read More...</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Post;
