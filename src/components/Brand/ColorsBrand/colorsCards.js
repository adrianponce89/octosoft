import React, { Fragment } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const colorsCards = ({ colors }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      justify="flex-start"
      className={classes.colorContainer}
    >
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
            <div className={classes.decriptionContainer}>
              <Typography className={classes.description}>
                {item.description.description}
              </Typography>
            </div>

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
                    {item.colors[0] === '#FFE53B' ? (
                      <Typography
                        className={classes.hexColor}
                        style={{ color: '#666666' }}
                      >
                        HEX: {hexadecimals}
                      </Typography>
                    ) : (
                      <Typography
                        className={classes.hexColor}
                        style={{ color: `${item.colors[0]}` }}
                      >
                        HEX: {hexadecimals}
                      </Typography>
                    )}
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
    marginBottom: '2rem',
    marginTop: '2rem',
  },
  eachGrid: {
    marginRight: '8%',
    marginBottom: theme.spacing(9),
    '@media (max-width: 768px)': {
      marginRight: 0,
      marginBottom: '5%',
      marginTop: '5%',
    },
  },
  decriptionContainer:{
    minHeight: 80,
    marginBottom: 10,
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
    height: '6rem',
    marginBottom: '1rem',
    marginTop: '1rem',
    textAlign: 'left',
    width: '60%',
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
    justifyContent: 'fle-start',
    marginLeft: '5%',
    width: '35%',
  },
  boxColors: {
    width: '60%',
    height: '3rem',
  },
}));
export default colorsCards;
