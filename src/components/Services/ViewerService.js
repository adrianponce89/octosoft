import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import BackgroundImage from '../../assets/Trama.png';

const styles = makeStyles({
  infoContainer: {
    margin: '40px auto 40px auto',
    padding: 20,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: '#eee',
    backgroundPosition: 'initial',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
  },
  iconsDescriptions: {
    width: '100%',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: '150%',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '40vmin',
    '@media (max-width: 760px)': {
      backgroundSize: 'contain',
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
    background: 'white',
    padding: 0,
    '& li p': {
      fontSize: '2.1vmin',
      lineHeight: '1.2em',
      margin: 10,
    },
    '& li p::before': {
      content: '"· "',
      display: 'inline',
      fontWeight: 'bold',
      marginLeft: 15,
    },
    '& div': {
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
        maxHeight: 'max-content',
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
        xs={12}
        sm={8}
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
