import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
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
  gridWrapper: {
    padding:'45px 0'
  }
}));

const sortArray = (arr) => {
  arr.sort(function (a, b) {
    return a.node.newOrder - b.node.newOrder;
  });
  return arr
}

const Services = ({ services}) => {
  const { edges: servicesData, nodes: servicesDesc} = services;

  const [servicesToShow, setServicesToShow] = useState([]);

  useEffect(() => {
    setServicesToShow(sortArray(servicesData))
  },[])

  
  const classes = styles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.gridWrapper}
    >
      <Grid
        container
        className={classes.root}
        item
        xl={8}
        lg={10}
        xs={12}
      >
        {servicesToShow.length > 0 &&
          servicesToShow
            .slice(1, 5)
            .map((service, index) => (
              <ServiceItem
                key={index}
                service={service}
                description={servicesDesc}
              />
            ))}
      </Grid>
      <Grid
        container
        className={classes.root}
        item
        xl={8}
        lg={10}
        xs={12}
      >
        {servicesToShow.length > 0 &&
          servicesToShow
            .slice(5, 9)
            .map((service, index) => (
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



