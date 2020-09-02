import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles({
  imageArticle: {
    backgroundImage: (props) =>
      props.photo ? `url(${props.photo.file.url})` : '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
  const post = get(props, 'data.contentfulPost');
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
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(post.content.json),
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticleViews;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      slug
      title
      photo {
        file {
          url
        }
      }
      content {
        json
      }
    }
  }
`;
