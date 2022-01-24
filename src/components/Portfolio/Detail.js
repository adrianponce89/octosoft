import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import ItemPortfolio from './Item';

const DetailPortfolio = ({ portfolios }) => {
  const classes = useStyle();

  return (
    <Paper square elevation={1} className={classes.root}>
      <Grid item container xs={12}>
        {portfolios.map(({ file, title, description }) => (
          <Grid
            item
            xs={12}
            md={3}
            container
            justify="center"
            key={title}
            className={classes.boxGrid}
          >
            <ItemPortfolio
              portfolio={file}
              title={title}
              link={description}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(5),
    },
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
  },
  boxGrid: {
    padding: 10,
  },
}));

export default DetailPortfolio;
