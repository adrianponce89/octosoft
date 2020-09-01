import React from 'react';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import { article as DummyArticle } from '../assets/DummyData';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles({
  imageArticle: {
    background: (props) => `url(${props.picUrl})`,
    backgroundSize: (props) => props.backgroundSize || 'cover',
    backgroundPosition: (props) =>
      props.backgroundPosition || 'center',
    paddingBottom: '50%',
    margin: '15px 0',
  },
  titleArticle: {
    fontSize: 40,
    margin: '15px 0',
    textAlign: 'center',
  },
  descriptionArticle: { margin: 15 },
});
const ArticleViews = (props) => {
  const post = DummyArticle[0];
  const classes = styles(post);
  return (
    <Container background={`url(${BackgroundImage})`}>
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
      >
        <Grid item md={12} className={classes.imageArticle}></Grid>
        <Grid item md={12} className={classes.titleArticle}>
          {post.title}
        </Grid>
        <Grid item md={12} className={classes.descriptionArticle}>
          {post.description}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticleViews;
