import React from 'react';
import { FormControl, TextField } from '@material-ui/core';

const PrimaryInput = ({ className, variant, ...otherProps }) => {
  return (
    <FormControl variant={variant} size="small" fullWidth>
      <TextField variant={variant} {...otherProps} />
    </FormControl>
  );
};

export default PrimaryInput;
