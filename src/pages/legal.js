import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import BackgroundImage from '../assets/Trama.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flow-root',
  },
  descriptionArticle: { margin: 30 },
}));

const PrivacyPolicy = (props) => {
  const data = get(props, 'data.contentfulLegal');
  const classes = styles(data);
  return (
    <Container background={`url(${BackgroundImage})`}>
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        className={classes.container}
        xs={12}
      >
        <Grid item xs={12} className={classes.descriptionArticle}>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(data.content.json),
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PrivacyPolicy;

export const pageQuery = graphql`
  query PrivacyPolicyQuery {
    contentfulLegal(title: { eq: "PRIVACY POLICY" }) {
      content {
        id
        json
      }
    }
  }
`;
