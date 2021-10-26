import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ColorsCards from './colorsCards';
import GreyCard from './greyCard';
import TitleColors from './titleColors';
const IndexColors = ({ colors }) => {
  const classes = useStyles();
  const primary = colors?.slice(0, 3);
  const secondary = colors?.slice(3, 6);
  const grey = colors?.slice(6, 7);
  return (
    <Grid className={classes.root} xs={11} container justify="center">
      <Grid xs={12} container justify="left">
        <Typography className={classes.title}>
          COLOR PALETTE
        </Typography>
      </Grid>
      <TitleColors text={'PRIMARY'} />
      <ColorsCards colors={primary} />
      <TitleColors text={'SECONDARY'} />
      <ColorsCards colors={secondary} />
      <TitleColors text={' GREY VALUES'} />
      <GreyCard colors={grey} />
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'fit-content',
    marginBottom: '3%',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 40,
    justifyContent: 'flex-start',
    marginBottom: '1%',
    marginTop: '4%',
    '@media (max-width: 768px)': {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 20,
    marginBottom: '1%',
    marginTop: '5%',
    '@media (max-width: 768px)': {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
}));

export default IndexColors;
