import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles({
  infoContainer: {
    margin: '40px auto 40px auto',
    padding: 20,
    background: '#eee',
  },
  iconsDescriptions: {
    width: '100%',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: '150%',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '40vmin',
    '@media (max-width: 760px)': {
      paddingBottom: '60vmin',
    },
  },
  titleDescriptions: {
    margin: '20px 0 20px 0',
    fontSize: 27,
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  containerDescription: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    padding: 0,
    '& li p': {
      margin: 15,
    },
    '& li p::before': {
      content: '"· "',
      display: 'inline',
      fontWeight: 'bold',
    },
    '& div': {
      background: 'red',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      flex: 1,
      alignSelf: 'stretch',
    },
    '& ul': {
      flex: 1,
      display: 'flex',
      background: '#fff',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignSelf: 'stretch',
      height: '100%',
      maxHeight: '60vh',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 760px)': {
        flexWrap: 'nowrap',
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
      <Grid item xs={8} sm={3} direction="column" alignItems="center">
        <div className={classes.iconsDescriptions} />
        <div className={classes.titleDescriptions}>
          {service.node.title}
        </div>
      </Grid>
      <Grid
        container
        item
        md={8}
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
