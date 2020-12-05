import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import AvatarTeam from '../components/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/Trama.png';
import Services from '../components/Services';
import { Grid } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  headTitle: {
    fontSize: 64,
    textAlign: 'center',
    color: '#888',
    fontWeight: 900,
  },
}));

const OurTeam = ({ teamMembers }) => {
  const classes = styles();

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>Our Team</h1>
      </Grid>
      <Grid container direction="row" justify="center">
        {teamMembers.map(({ node }) => (
          <AvatarTeam
            name={node.name}
            title={node.title}
            section={node.section}
            background={`url(${node.photo.file.url})`}
          />
        ))}
      </Grid>
    </>
  );
};

export default OurTeam;
