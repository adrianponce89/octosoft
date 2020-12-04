import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  headTitle: {
    fontSize: 40,
    textAlign: 'center',
  },
  headSubTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  containerPartners: {
    background: '#ECECEC',
  },
  itemPartners: {
    margin: 24,
    padding: 25,
    background: '#5c5f5c',
    textDecoration: 'none',
  },
  itemPartnersLink: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const Partners = ({ partners }) => {
  const classes = styles();

  return (
    <Grid container direction="column" alignItems="center">
      <h1 className={classes.headTitle}>Our Partners</h1>
      <Grid
        container
        justify="center"
        xs={10}
        className={classes.headSubTitle}
      >
        Learn about our departaments and how they can help you and
        your company.
      </Grid>
      <Grid
        container
        justify="center"
        className={classes.containerPartners}
      >
        {partners.map(({ node }) => (
          <Grid container md={4} justify="center">
            <Grid
              container
              justify="center"
              alignContent="center"
              wrap
              className={classes.itemPartners}
            >
              <a
                className={classes.itemPartnersLink}
                href={node.link}
              >
                {node.title}
              </a>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Partners;
