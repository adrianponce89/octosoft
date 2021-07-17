import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles((theme) => ({
  root: {
    width: 230,
    paddingBottom: 20,
    paddingTop: 20,
    marginLeft:10,
    marginRight:10,
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
}));

const ServiceItem = ({service}) => {
    console.log('serviceItem:',service.node)
    const classes = styles();

    return (
      <Grid
        container
        item
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid item>
          <img src={service.node.images[0].file.url} />
          <Typography className={classes.title}>
            {service.node.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore.
          </Typography>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(
                service.node.content.json,
              ),
            }}
          /> */}
        </Grid>
      </Grid>
    );
}

export default ServiceItem
