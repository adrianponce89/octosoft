import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
const styles = makeStyles({
  imageArticle: {
    background: (props) => props.background,
    backgroundSize: (props) => props.backgroundSize || 'cover',
    backgroundPosition: (props) =>
      props.backgroundPosition || 'center',
    paddingBottom: '50%',
    margin: '15px 0',
  },
  titleArticle: { fontSize: 40, margin: '15px 0' },
  descriotionArticle: { margin: 15 },
});

const PostView = (props) => {
  const classes = styles(props);
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignContent="center"
    >
      <Grid item md={12} className={classes.imageArticle}></Grid>
      <Grid item md={12} className={classes.titleArticle}>
        {props.title}
      </Grid>
      <Grid item md={12}>
        {props.descriotion}
      </Grid>
    </Grid>
  );
};

export default PostView;
