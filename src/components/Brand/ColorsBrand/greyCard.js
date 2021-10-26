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
  boxGrey: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1rem',
    width: '100%',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      marginTop: '3rem',
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
    marginTop: '0.5rem',
    '@media (max-width: 768px)': {
      marginBottom: '1rem',
    },
  },
}));
export default GreyCards;
