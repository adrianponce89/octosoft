import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import PostSignature from '../components/PostSignature';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flow-root',
  },
  imageArticle: {
    backgroundImage: (props) =>
      props.photo ? `url(${props.photo.file.url})` : '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '50%',
    marginBottom: '15px',
    position: 'relative',
    boxShadow: theme.boxShadow,
    borderRadius: `0 0 ${theme.borderRadius} ${theme.borderRadius}`,
  },
  titleArticle: {
    fontSize: 40,
    margin: '15px 0',
    textAlign: 'center',
  },
  descriptionArticle: { margin: 15 },
  firm: {
    color: '#6e6e6e',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '1.1em',
  },
  link: { textDecoration: 'none' },
}));

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
        className={classes.container}
      >
        <Grid item xs={12} className={classes.imageArticle} />

        <Grid item xs={12} className={classes.titleArticle}>
          {post.title}
        </Grid>
        <Grid item xs={12} className={classes.descriptionArticle}>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(post.content.json),
            }}
          />
          <Grid item xs={4}>
            <PostSignature
              linkFirm={post.linkFirm}
              firm={post.firm}
              imgAvatarUrl={post.avatar.file.url}
            />
          </Grid>
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
      linkFirm
      firm
      avatar {
        file {
          url
        }
      }
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
