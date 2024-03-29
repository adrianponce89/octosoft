import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import ServiceCard from './serviceCard';
import { Link } from 'gatsby';

const ServiceGrid = ({ data, porfoliosData }) => {
  const classes = useStyle();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container className={classes.root}>
      <Grid container className={classes.gridContainer}>
        {data.map((node) =>
          <ServiceCard
            key={node.newName}
            data={node}
            handleChange={(panel) => handleChange(panel)}
            expanded={expanded}
            porfoliosData={porfoliosData}
          />
        )}
      </Grid>
    </Container>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },
  gridContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    maxWidth: 'unset',
    gap: '8px',
    [theme.breakpoints.down('sm')]: {

    },
  },
}));

export default ServiceGrid;