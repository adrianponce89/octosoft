import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Image from './Image';
import Left from './Left';

const UnderConstruction = ({ imgUrl }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  return (
    <Grid
      container
      justify="flex-end"
      alignItems="center"
      className={classes.root}
    >
      <Left email={email} setEmail={setEmail} />
      <Image imgUrl={imgUrl} />
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(187, 109, 199, 0.13)',
    background: 'transparent',
    borderRadius: 15,
    columnGap: theme.spacing(12),
  },
}));

export default UnderConstruction;
