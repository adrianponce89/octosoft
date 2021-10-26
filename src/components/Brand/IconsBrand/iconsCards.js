import React from 'react';
import {
  Grid,
  Typography,
  Card,
  Button,
  Box,
  CardMedia,
} from '@material-ui/core';
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
            <Card className={classes.logoCard}>
              <CardMedia
                component="img"
                className={classes.cardMedia}
                image={item.image.file.url}
                alt={item.description.description}
              />
            </Card>
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
                PNG
              </Button>
              <Button
                className={classes.buttonsCard}
                onClick={() =>
                  onDownloadSVG(item.image.file.url, 'logoOcto')
                }
              >
                <Download className={classes.iconButton} />
                SVG
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
    '@media (max-width: 768px)': {
      marginRight: 0,
      marginBottom: '1rem',
      marginTop: '1rem',
    },
  },
  cardMedia: {
    width: '100%',
    height: '260px',
    objectFit: 'contain',
  },
  logoCard: {
    alignItems: 'centar',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    background: '#FFFFFF',
    border: '1.3px solid #DFDFDF',
    boxSizing: 'border-box',
    boxShadow:
      '-10px -10px 20px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 300,
    height: '5rem',
    fontSize: 13,
    marginBottom: '1rem',
    marginTop: '1rem',
    textAlign: 'justify',
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
    height: '1rem',
    width: '2rem',
  },
}));

export default IconsCards;
