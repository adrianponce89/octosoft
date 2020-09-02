import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import BackgroundImage from '../../assets/Background.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { fetchFromContentfulByQuery } from '../../Contentful';

const styles = makeStyles({
  imageArticle: {
    backgroundImage: (props) =>
      props.photo ? `url(${props.photo.fields.file.url})` : '',
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
  const { slug } = props.match.params;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchFromContentfulByQuery(
      {
        content_type: 'post',
        'fields.slug': slug,
      },
      setPosts,
    );
  }, []);

  const classes = styles(posts.length > 0 ? posts[0].fields : {});

  return (
    <Container background={`url(${BackgroundImage})`}>
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
      >
        <Grid item md={12} className={classes.imageArticle}></Grid>
        {posts.length > 0 ? (
          <>
            <Grid item md={12} className={classes.titleArticle}>
              {posts[0].fields.title}
            </Grid>
            <Grid item md={12} className={classes.descriptionArticle}>
              <div
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(
                    posts[0].fields.content,
                  ),
                }}
              />
            </Grid>
          </>
        ) : (
          ''
        )}
      </Grid>
    </Container>
  );
};

export default ArticleViews;
