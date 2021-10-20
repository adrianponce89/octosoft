import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import ItemPortfolio from './Item';

const DetailPortfolio = ({ portfolios }) => {
  const classes = useStyle();

  return (
    <Paper square elevation={1} className={classes.root}>
      <Grid
        item
        container
        xs={12}
        sm={8}
        justify="space-evenly"
        className={classes.boxGrid}
      >
        {portfolios.map(({ file, title }) => (
          <Grid
            item
            xs={12}
            md={5}
            container
            justify="center"
            key={title}
          >
            <ItemPortfolio portfolio={file} title={title} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(25, 0),
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
  },
  boxGrid: {
    gap: '44px 0',
  },
}));

export default DetailPortfolio;
