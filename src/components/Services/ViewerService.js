import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles({
  infoContainer: {
    margin: '40px auto 40px auto',
    padding: '20px 0 20px 0',
  },
  iconsDescriptions: {
    width: 250,
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transition: '1.1s cubic-bezier(0.4, 0, 1, 1)',
    paddingBottom: '40vh',
  },
  titleDescriptions: {
    margin: '20px 0 20px 0',
    fontSize: 27,
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  containerDescription: {
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    overflow: 'auto',
    '& p': {
      margin: 15,
    },
    '& ul': {
      display: 'flex',
      background: '#fff',
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: 320,
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      paddingTop: 10,
      '@media (max-width: 760px)': {
        flexWrap: 'nowrap',
        minHeight: 400,
      },
    },
  },
});

const ViewerService = ({ service }) => {
  const classes = styles({ image: service.node.images[1].file.url });
  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      className={classes.infoContainer}
    >
      <Grid
        item
        container
        md={3}
        direction="column"
        alignItems="center"
      >
        <Grid item ms={6}>
          <div className={classes.iconsDescriptions} />
        </Grid>
        <div className={classes.titleDescriptions}>
          {service.node.title}
        </div>
      </Grid>
      <Grid
        container
        item
        md={6}
        className={classes.containerDescription}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(service.node.content.json),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ViewerService;
