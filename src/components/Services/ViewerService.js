import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import BackgroundImage from '../../assets/Trama.png';

const styles = makeStyles({
  infoContainer: {
    margin: '40px auto 40px auto',
    padding: '20px 0 20px 0',
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundColor: '#ececec',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '4vh',
    position: 'relative',
  },
  iconsDescriptions: {
    width: 250,
    height: '98%',
    position: 'absolute',
    top: '-20px',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: '1.1s cubic-bezier(0.4, 0, 1, 1)',
    '@media (max-width: 760px)': {
      position: 'relative',
      top: 0,
      height: '5vh',
    },
  },
  titleDescriptions: {
    margin: '20px 0 20px 0',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    position: 'absolute',
    top: '80%',
    '@media (max-width: 760px)': {
      position: 'relative',
      top: 0,
    },
  },
  containerDescription: {
    height: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    overflow: 'hiddem',
    '& p': {
      margin: 15,
    },
    '& ul': {
      display: 'flex',
      background: '#fff',
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: 320,
      width: '97%',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      paddingTop: 10,
      '@media (max-width: 760px)': {
        flexWrap: 'nowrap',
        alignSelf: 'center',
        minHeight: 400,
        height: '50%',
        width: '80%',
        overflow: 'auto',
      },
    },
    '@media (max-width: 760px)': {
      overflow: 'auto',
      height: '50%',
    },
  },
});

const ViewerService = ({ service }) => {
  const classes = styles({
    image: service.node.images[1].file.url,
    backgroundImage: BackgroundImage,
  });
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.infoContainer}
    >
      <Grid
        item
        container
        md={3}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item className={classes.iconsDescriptions}></Grid>
        <Grid item className={classes.titleDescriptions}>
          {service.node.title}
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={9}
        justify="center"
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
