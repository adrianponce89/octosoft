import React from 'react'
import {Link} from 'gatsby'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    width: 250,
    paddingBottom: 20,
    paddingTop: 20,
    //marginLeft: 10,
    //marginRight: 10,
    '@media (max-width: 820px)': {
      width: 300,
    },
  },
  title: {
    color: ({ color }) => color,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 18,
    textAlign: 'left',
    paddingBottom: 15,
    paddingTop: 15,
  },
  description: {
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(3),
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  link: {
    color: '#000000',
  },
  textLink: {
    paddingTop: 15,
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(3),
  },
}));

const ServiceItem = ({ service, description }) => {
  const classes = styles({color: service.node.newColor});

  let descriptionText = description.filter(
    (item) => Number(item.order) === service.node.order,
  );

  return (
    <Grid
      container
      item
      alignItems="center"
      justify="flex-start"
      className={classes.root}
    >
      <Grid item>
        <div className={classes.imgContainer}>
          <img src={service.node.images[1].file.url} />
        </div>
        <Typography className={classes.title}>
          {service.node.newName}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" className={classes.description}>
          {descriptionText[0].description}
        </Typography>
        <Link
          to={`/portfolio/${service.node.category}`}
          className={classes.link}
        >
          <Typography variant="body1" className={classes.textLink}>
            VIEW PORTFOLIO
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default ServiceItem
