import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const ButtonAll = () => {
  const classes = useStyles();
  return (
    <Button className={classes.button}>DOWNLOAD ALL LOGOS</Button>
  );
};
const useStyles = makeStyles((theme) => ({
  button: {
    border: 'solid 1px #33ADFF',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 15,
    width: '30%',
    boxShadow: '-5px -5px 15px 0px #33ADFF40',
    '@media (max-width: 768px)': {
      width: '80%',
    },
  },
}));

export default ButtonAll;
