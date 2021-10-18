import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles((theme) => ({
  root: {
    width: 230,
    paddingBottom: 20,
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 22,
    textAlign: 'center',
  },
  description: {
    textAlign: 'justify',
    fontFamily: 'Montserrat',
  },
  imgContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  }
}));

const ServiceItem = ({ service, description }) => {
  const classes = styles();

  let descriptionText = description.filter(
    (item) => Number(item.order) === service.node.order,
  );

  return (
    <Grid
      container
      item
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item>
        <div className={classes.imgContainer}>
          <img src={service.node.images[0].file.url} />
        </div>
        <Typography className={classes.title}>
          {service.node.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" className={classes.description}>
          {descriptionText[0].description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServiceItem
