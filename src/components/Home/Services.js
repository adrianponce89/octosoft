import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import ServiceItem from '../serviceItem';

const styles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between',
    '@media (max-width: 760px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '@media (min-width: 1800px)': {
      maxWidth: '60%',
    },
  },
}));

const Services = ({ services}) => {
  const { edges: servicesToShow, nodes: servicesDesc} = services;
  const classes = styles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid
        container
        className={classes.root}
        item
        xl={8}
        lg={10}
        xs={12}
      >
        {servicesToShow.slice(1, 9).map((service, index) => (
          <ServiceItem
            key={index}
            service={service}
            description={servicesDesc}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Services



