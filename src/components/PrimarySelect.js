import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: 'Montserrat',
    '& div': {
      borderRadius: 0,
    },
    '& div::before': {
      borderRadius: 0,
      borderBottom: 'none',
    },
    '& input': {
      fontFamily: 'Montserrat',
      paddingTop: 24,
      paddingLeft: 12,
      paddingBottom: 6,
    },
    '& label': {
      fontFamily: 'Montserrat',
      transform: 'translate(12px, 18px) scale(1)',
    },
    '& label span': {
      display: 'none',
    },
    '& label.MuiInputLabel-shrink': {
      transform: 'translate(12px, 6px) scale(0.75)',
    },
  },
}));

const PrimarySelect = ({
  className,
  id,
  label,
  children,
  ...otherProps
}) => {
  const classes = useStyles();
  return (
    <FormControl
      variant="filled"
      size="small"
      className={`${classes.input} ${className}`}
      fullWidth
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select label={label} id={id} {...otherProps}>
        {children}
      </Select>
    </FormControl>
  );
};

export default PrimarySelect;
