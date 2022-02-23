import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Download from '../../../assets/download.svg';
import OctoFour from '../../../assets/VectorMid.png';

import {
  onDownloadPNG,
  onDownloadSVG,
} from '../../../utils/index.js';

const IconsCardRight = ({ logos }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      container
      justify="center"
      className={classes.root}
    >
      <img src={OctoFour} alt="" className={classes.OctoFive} />
      <Grid
        container
        xs={11}
        className={classes.gridContainer}
        spacing={8}
      >
        {logos &&
          logos.slice(3, 6).map((item, index) => (
            <Grid item key={index} className={classes.eachGrid}>
              <div className={classes.logoCard}>
                <div
                  className={classes.cardMedia}
                  style={{
                    backgroundImage: `url(${item.image.file.url})`,
                  }}
                />
              </div>
              <Typography className={classes.description}>
                {item.description.description}
              </Typography>
              <Box className={classes.groupButtons}>
                <Button
                  className={classes.buttonsCard}
                  onClick={() =>
                    onDownloadPNG(item.image.file.url, 'logoOcto')
                  }
                >
                  <Download className={classes.iconButton} />
                  <Typography
                    variant="subtitle"
                    className={classes.btnText}
                  >
                    PNG
                  </Typography>
                </Button>
                <Button
                  className={classes.buttonsCard}
                  onClick={() =>
                    onDownloadSVG(item.image.file.url, 'logoOcto')
                  }
                >
                  <Download className={classes.iconButton} />
                  <Typography
                    variant="subtitle"
                    className={classes.btnText}
                  >
                    SVG
                  </Typography>
                </Button>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    position: 'relative',
    height: 'fit-content',
    '@media (max-width: 960px)': {
      padding: 0,
    },
  },
  OctoFive: {
    position: 'absolute',
    top: '-50%',
    left: 0,
  },
  gridContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '1rem',
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
    fontSize: 12,
    '@media (min-width: 1980px)': {
      fontSize: 12,
    },
  },
  noBorder: {
    width: '100%',
    height: '260px',
    backgroundColor: '#37ADD4',
    outline: 'none',
    border: 'none',
    borderRadius: '10px 10px 10px 10px',
  },
  cardMedia: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    overflow: 'hidden',
    borderRadius: '10px 10px 10px 10px',
    border: '-2px solid yellow',
  },
  logoCard: {
    alignItems: 'centar',
    display: 'flex',
    justifyContent: 'center',
    width: '280px',
    height: '280px',
    backgroundColor: '#37ADD4',
    outline: 'none',
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
    textAlign: 'left',
    width: '280px',
    '@media (max-width: 768px)': {
      height: '5rem',
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
    justifyContent: 'left',
    paddingLeft: '0%',
    margin: '0%',
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

export default IconsCardRight;
