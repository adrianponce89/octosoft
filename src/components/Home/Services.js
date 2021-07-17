import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import ServiceItem from '../serviceItem';

const styles = makeStyles((theme) => ({
  root: {
    width: 600,
    marginBottom: 20,
    marginTop: 20,
  },
}));

const Services = ({ services }) => {
    const { edges : servicesToShow } = services;
    const classes = styles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid container justify="space-between" item md={8}>
        {servicesToShow.slice(1, 9).map((service) => (
          <ServiceItem service={service} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Services



