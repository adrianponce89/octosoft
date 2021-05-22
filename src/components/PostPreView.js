import React from 'react';
import { Link } from 'gatsby';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import PostSignature from './PostSignature';

const styles = makeStyles({
  link: {
    textDecoration: 'none',
  },
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
    color: '#a96cb0',
  },
  contentPost: {
    height: '9vh',
    margin: '15px',
    fontSize: '9px',
    lineHeight: '12px',
    overflow: 'hidden',
  },
  textButton: {
    color: '#41a0ff',
  },
  footerNews: { margin: '0 15px' },
});

const Post = (props) => {
  const classes = styles(props);
  return (
    <Grid item xs={12}>
      <Link className={classes.link} to={`/news/${props.slug}`}>
        <Paper
          xs={12}
          elevation={2}
          className={classes.containerPost}
        >
          <div className={classes.containerPicPost}>
            <Paper className={classes.picPost} />
          </div>
          <h2 className={classes.titlePost}>{props.title}</h2>
          <Grid container direction="row">
            <Grid item md={10} xs={9}>
              <div
                className={classes.contentPost}
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(props.content),
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction="row"
              alignItems="center"
              justify="space-between"
              className={classes.footerNews}
            >
              <PostSignature
                linkFirm={props.linkFirm}
                firm={props.firm}
                imgAvatarUrl={props.avatar}
              />
              <Grid item xs={3} md={2}>
                <p className={classes.textButton}>Read More...</p>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
};

export default Post;
