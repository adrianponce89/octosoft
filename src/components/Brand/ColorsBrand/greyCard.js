import React, { Fragment } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const GreyCards = ({ colors }) => {
  const classes = useStyles();
  const hexadecimals = colors[0].colors;
  return (
    <Fragment>
      <Box className={classes.boxGrey}>
        {hexadecimals &&
          hexadecimals.map((item, index) => (
            <Box className={classes.eachBox} key={index}>
              <Box
                className={classes.colorsBox}
                style={{
                  backgroundColor: `${item}`,
                }}
              />
              <Typography className={classes.textHex}>
                {' '}
                HEX: {item}
              </Typography>
            </Box>
          ))}
      </Box>
    </Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '3%',
    marginTop: '3%',
  },
  boxGrey: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '2%',
    width: '100%',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      marginTop: '5%',
    },
  },
  eachBox: {
    width: '15%',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  colorsBox: {
    width: '100%',
    height: '5rem',
    border: 'solid 1px rgb(0,0,0, 0.1)',
  },
  textHex: {
    fontSize: 10,
    fontFamily: 'Montserrat',
    fontWeight: 600,
    marginTop: '2%',
    '@media (max-width: 768px)': {
      marginBottom: '5%',
    },
  },
}));
export default GreyCards;
