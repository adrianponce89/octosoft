import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GreenIcon from '../../../assets/iconfigma.svg';
import PinkIcon from '../../../assets/pinkiconfigma.svg';
import trama from '../../../assets/Brand2.png';

const EndSection = ({
  haveList = false,
  title,
  text,
  listItems,
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={11}
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid xs={12} container>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid xs={12} container className={classes.textContainer}>
        {text && (
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle" className={classes.text}>
              {text}
            </Typography>
          </Grid>
        )}
      </Grid>
      {haveList && (
        <Grid
          xs={12}
          justify="space-between"
          container
          className={classes.textContainer}
        >
          <Grid xs={12} md={5} container className={classes.wrapper}>
            {listItems && (
              <>
                <Typography
                  variant="subtitle"
                  className={classes.listTitle}
                >
                  {listItems[0].title}
                </Typography>
                <Grid container item xs={12}>
                  {listItems[0].list1.map((listItem) => (
                    <Grid
                      item
                      xs={12}
                      container
                      alignItems="center"
                      className={classes.textList}
                    >
                      <GreenIcon className={classes.icon} />
                      <Grid item xs={10}>
                        <Typography
                          variant="subtitle"
                          className={classes.listItem}
                        >
                          {listItem}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Grid>
          <Grid xs={12} md={5} container className={classes.wrapper}>
            {listItems && (
              <>
                <Typography
                  variant="subtitle"
                  className={classes.listTitle}
                >
                  {listItems[1].title}
                </Typography>
                <Grid container item xs={12}>
                  {listItems[1].list1.map((listItem) => (
                    <Grid
                      item
                      xs={12}
                      container
                      alignItems="center"
                      className={classes.textList}
                    >
                      <PinkIcon className={classes.icon} />
                      <Grid item xs={10}>
                        <Typography
                          variant="subtitle"
                          className={classes.listItem}
                        >
                          {listItem}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${trama})`,
    backgroundPosition: 'right -40% top 0%',
    backgroundSize: '600px 600px',
    backgroundRepeat: 'no-repeat',
  },
  fontContainer: {
    margin: theme.spacing(8, 0, 0, 6),
  },
  link: {
    textDecoration: 'none',
  },
  buttonLink: {
    padding: theme.spacing(2, 5),
    marginTop: theme.spacing(3),
    border: '1px solid #FF9F3B',
    boxShadow:
      '-3px -3px 5px rgba(255, 159, 59, 0.25), 3px 3px 5px rgba(255, 159, 59, 0.25);',
  },
  wrapper: {
    margin: theme.spacing(3, 0, 0, 0),
  },
  title: {
    margin: theme.spacing(6, 0),
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 40,
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 28,
    },
  },
  listTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 30,
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 24,
    },
  },
  listItem: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 15,
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 13,
    },
  },
  icon: {
    width: 24,
    marginRight: theme.spacing(2),
    '@media (max-width: 760px)': {
      width: 15,
    },
  },
  textList: {
    marginTop: 5,
  },
}));

export default EndSection;
