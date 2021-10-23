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

const IconsCardRight = ({ logos }) => {
  const classes = useStyles();
  return (
    <Grid container xs={12} justify="flex-end">
      {logos &&
        logos.slice(3, 6).map((item, index) => (
          <Grid
            item
            md={3}
            xs={12}
            key={index}
            className={classes.eachGrid}
          >
            <Card className={classes.logoCard}>
              <div className={classes.noBorder}>
                <div
                  className={classes.cardMedia}
                  style={{
                    backgroundImage: `url(${item.image.file.url})`,
                  }}
                />
              </div>
            </Card>
            <Typography className={classes.description}>
              {item.description.description}
            </Typography>
            <Box className={classes.groupButtons}>
              <Button className={classes.buttonsCard}>
                <Download className={classes.iconButton} />
                PNG
              </Button>
              <Button className={classes.buttonsCard}>
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
    marginLeft: '4%',
    '@media (max-width: 768px)': {
      marginLeft: 0,
      marginBottom: '5%',
      marginTop: '5%',
    },
  },
  noBorder: {
    width: '100%',
    height: '260px',
    backgroundColor: '#37ADD4',
    outline: 'none',
    border: 0,
  },
  cardMedia: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    border: 0,
    overflow: 'hidden',
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
    fontSize: 13,
    marginBottom: '3%',
    marginTop: '3%',
    textAlign: 'justify',
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
    fontSize: 8,
    fontWeight: 600,
    justifyContent: 'left',
    paddingLeft: '0%',
    margin: '0%',
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

export default IconsCardRight;
