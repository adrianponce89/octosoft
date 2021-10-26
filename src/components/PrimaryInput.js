import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '10rem',
    '& .MuiInputBase-input': {
      borderRadius: '10rem',
    },
    '& .MuiOutlinedInput-input': {
      borderRadius: '10rem',
    },
    '& .PrivateNotchedOutline-root-84': {
      borderRadius: '10rem',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '10rem',
    },
  },
}));

const PrimaryInput = ({ className, variant, ...otherProps }) => {
  const classes = useStyles();
  return (
    <FormControl variant={variant} size="small" fullWidth>
      <TextField
        className={`${classes.root} ${className}`}
        variant={variant}
        {...otherProps}
      />
    </FormControl>
  );
};

export default PrimaryInput;
