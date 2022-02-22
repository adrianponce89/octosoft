import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Background from '../components/Background/index';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flow-root',
  },
  root: {
    width: '100%',
    paddingTop: '10rem',
    backgroundColor: '#F5F7F7',
    '@media (max-width: 760px)': {
      paddingTop: '7rem',
    },
  },
  descriptionArticle: { 
    margin: 30,
    '@media (max-width: 760px)': {
      margin: 0,
      marginLeft: '1rem',
      marginRight: '1rem',
      marginBottom: '2rem',
      fontSize: '1px',
    },
  },
}));

const PrivacyPolicy = (props) => {
  const data = get(props, 'data.contentfulLegal');
  const classes = styles(data);
  return (
    <Grid
      item
      xs={12}
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Background isFullLength={true}/>
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
    </Grid>
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
