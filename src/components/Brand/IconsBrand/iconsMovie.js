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
      className={classes.gridContainer}
      spacing={8}
    >
      {logos &&
        logos.slice(6, 9).map((item, index) => (
          <Grid item key={index} className={classes.eachGrid}>
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
                <Typography className={classes.btnText}>
                  FBX Metallic
                </Typography>
              </Button>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[1])}
              >
                <Download className={classes.iconButton} />

                <Typography className={classes.btnText}>
                  FBX Matte
                </Typography>
              </Button>
            </Box>
            <Box className={classes.groupButtons}>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[2])}
              >
                <Download className={classes.iconButton} />
                <Typography className={classes.btnText}>
                  FBX Metallic Thin
                </Typography>
              </Button>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[3])}
              >
                <Download className={classes.iconButton} />
                <Typography className={classes.btnText}>
                  FBX Matte Thin
                </Typography>
              </Button>
            </Box>
            <Box className={classes.groupButtons}>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[4])}
              >
                <Download className={classes.iconButton} />
                <Typography className={classes.btnText}>
                  FBX Metallic Bold
                </Typography>
              </Button>
              <Button
                className={classes.buttonsCard}
                onClick={() => handleDownload(item.fbxMedia[5])}
              >
                <Download className={classes.iconButton} />
                <Typography className={classes.btnText}>
                  FBX Matte Bold
                </Typography>
              </Button>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '1rem',
    '@media (max-width: 768px)': {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: '0',
    },
  },
  eachGrid: {
    zIndex: '1',
    '@media (max-width: 768px)': {
      marginLeft: 0,
      marginBottom: '1rem',
      marginTop: '1rem',
    },
  },
  btnText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 9.5,
    '@media (max-width: 768px)': {
      fontSize: 13,
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
    fontSize: 15,
    height: '5rem',
    marginBottom: '1rem',
    marginTop: '1rem',
    textAlign: 'justify',
    width: '280px',
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
    height: 21,
    width: '1.5rem',
    marginBottom: theme.spacing(2),
  },
}));

export default IconsMovie;
