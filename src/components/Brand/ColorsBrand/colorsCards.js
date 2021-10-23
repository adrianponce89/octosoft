import React, { Fragment } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const colorsCards = ({ colors }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <Grid container xs={12} justify="flex-start">
      {colors &&
        colors.map((item, index) => (
          <Grid
            item
            md={3}
            xs={12}
            key={index}
            className={classes.eachGrid}
          >
            <Typography className={classes.title}>
              {item.title}
            </Typography>
            <Typography className={classes.description}>
              {item.description.description}
            </Typography>
            <Fragment>
              {item.colors &&
                item.colors.map((hexadecimals, index) => (
                  <Box className={classes.eachColor}>
                    <Box
                      className={classes.boxColors}
                      style={{
                        backgroundColor: `${hexadecimals}`,
                      }}
                    />
                    <Typography
                      className={classes.hexColor}
                      style={{ color: `${item.colors[0]}` }}
                    >
                      HEX: {hexadecimals}
                    </Typography>
                  </Box>
                ))}
            </Fragment>
          </Grid>
        ))}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '3%',
    marginTop: '3%',
  },
  eachGrid: {
    marginRight: '6%',
    '@media (max-width: 768px)': {
      marginRight: 0,
      marginBottom: '5%',
      marginTop: '5%',
    },
  },
  title: {
    color: '#E05160',
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: 600,
    marginBottom: '2%',
    marginTop: '2%',
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 300,
    fontSize: 13,
    marginBottom: '3%',
    marginTop: '3%',
    textAlign: 'justify',
  },
  eachColor: {
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    verticalAlign: 'text-bottom',
  },
  hexColor: {
    alignItems: 'flex-end',
    display: 'flex',
    fontSize: 10,
    fontFamily: 'Montserrat',
    fontWeight: 600,
    justifyContent: 'flex-end',
    width: '35%',
  },
  boxColors: {
    width: '60%',
    height: '3rem',
  },
}));
export default colorsCards;
