import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Download from '../../../assets/download.svg';
import { onDownloadFBX } from '../../../utils/index.js';

const IconsMovie = ({ logos }) => {
  const handleDownload = (asset) => {
    console.log('fbx download!');
    onDownloadFBX(
      asset.file.url,
      asset.file.fileName,
      asset.file.contentType,
    );
  };

  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      justify="flex-start"
      className={classes.root}
    >
      {logos &&
        logos.slice(6, 9).map((item, index) => (
          <Grid
            item
            md={3}
            xs={12}
            key={index}
            className={classes.eachGrid}
          >
            <div className={classes.logoCard}>
              <video
                src={item.image.file.url}
                autoPlay={true}
                loop={true}
                className={classes.cardMedia}
                muted={true}
              ></video>
            </div>
            <Typography className={classes.description}>
              {item.description.description}
            </Typography>
            <Box className={classes.groupButtons}>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[0])}
              >
                <Download className={classes.iconButton} />
                FBX Metallic
              </Button>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[1])}
              >
                <Download className={classes.iconButton} />
                FBX Matte
              </Button>
            </Box>
            <Box className={classes.groupButtons}>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[2])}
              >
                <Download className={classes.iconButton} />
                FBX Metallic Thin
              </Button>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[3])}
              >
                <Download className={classes.iconButton} />
                FBX Matte Thin
              </Button>
            </Box>
            <Box className={classes.groupButtons}>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[4])}
              >
                <Download className={classes.iconButton} />
                FBX Metallic Bold
              </Button>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[5])}
              >
                <Download className={classes.iconButton} />
                FBX Matte Bold
              </Button>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  eachGrid: {
    marginRight: '2rem',
    zIndex:'1',
    '@media (max-width: 768px)': {
      marginRight: 0,
      marginBottom: '1rem',
      marginTop: '1rem',
    },
  },
  cardMedia: {
    width: '270px',
    height: '280px',
    objectFit: 'contain',
  },
  logoCard: {
    alignItems: 'centar',
    display: 'flex',
    justifyContent: 'center',
    width: '280px',
    background: '#FFFFFF',
    border: '1.3px solid #DFDFDF',
    boxSizing: 'border-box',
    boxShadow:
      '-10px -10px 20px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px 10px 10px 10px',
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 300,
    fontSize: 13,
    height: '5rem',
    marginBottom: '1rem',
    marginTop: '1rem',
    textAlign: 'justify',
    '@media (max-width: 768px)': {
      height: 'fit-content',
    },
  },
  groupButtons: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '0%',
    width: '100%',
    '@media (max-width: 768px)': {
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
  buttonsCard: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Montserrat',
    fontSize: 10,
    fontWeight: 600,
    height: 'fit-content',
    justifyContent: 'left',
    margin: '0%',
    paddingLeft: '0%',
    textAlign: 'left',
    width: '50%',
    '&:hover': {
      cursor: 'pointer',
    },
    '@media (max-width: 768px)': {
      width: '100%',
      fontSize: 13,
    },
  },
  iconButton: {
    paddingLeft: '0%',
    height: '1rem',
    width: '2rem',
  },
}));

export default IconsMovie;
