import React, { useState } from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Image from './Image';
import Left from './Left';

const UnderConstruction = ({ imgUrl }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addToMailchimp(email)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        alert(msg);
      })
      .catch((err) => {
        alert(err);
      });
    setEmail('');
  };

  return (
    <Grid
      container
      justify="flex-end"
      alignItems="center"
      className={classes.root}
    >
      <Left
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
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
