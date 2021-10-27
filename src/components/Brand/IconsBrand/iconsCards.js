import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Download from '../../../assets/download.svg';
import {
  onDownloadPNG,
  onDownloadSVG,
} from '../../../utils/index.js';

const IconsCards = ({ logos }) => {
  const classes = useStyles();
  return (
    <Grid container xs={12} justify="flex-start">
      {logos &&
        logos.slice(0, 3).map((item, index) => (
          <Grid
            item
            md={3}
            xs={12}
            key={index}
            className={classes.eachGrid}
          >
            <img
              className={classes.logoCard}
              sx={{ borderRadius: '50%' }}
              src={item.image.file.url}
              alt={item.description.description}
            />

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
  );
};

const useStyles = makeStyles((theme) => ({
  eachGrid: {
    marginRight: '2rem',
    zIndex: '1',
    '@media (max-width: 768px)': {
      marginRight: 0,
      marginBottom: '1rem',
      marginTop: '1rem',
    },
  },
  btnText: {
    fontSize: 16,
  },
  logoCard: {
    alignItems: 'centar',
    display: 'flex',
    justifyContent: 'center',
    width: '280px',
    height: '280px',
    objectFit: 'contain',
    background: '#FFFFFF',
    border: '1.3px solid #DFDFDF',
    borderRadius: '10px 10px 10px 10px',
    boxSizing: 'border-box',
    boxShadow:
      '-10px -10px 20px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(0, 0, 0, 0.1)',
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 300,
    height: '5rem',
    fontSize: 13,
    marginBottom: '1rem',
    marginTop: '1rem',
    textAlign: 'justify',
    width: '280px',
    '@media (max-width: 768px)': {
      height: 'fit-content',
    },
  },
  groupButtons: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '0%',
    width: '100%',
    '@media (max-width: 768px)': {
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },

  buttonsCard: {
    alignItems: 'flex-end',
    display: 'flex',
    fontFamily: 'Montserrat',
    fontSize: 10,
    height: 'fit-content',
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
    width: '2rem',
    marginBottom: theme.spacing(2),
  },
}));

export default IconsCards;
