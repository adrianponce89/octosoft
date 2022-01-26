import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  input: {
    marginBottom: 20,
    borderRadius: 4,
    fontFamily: 'Montserrat',
    '@media (max-width: 760px)': {
      width: '80%',
    },
  },
  btn: {
    '@media (max-width: 760px)': {
      marginRight: 40,
    },
  },
  menuItem: { fontFamily: 'Montserrat' },

  btnForm: {
    borderRadius: 4,
    padding: '10px 50px',
    backgroundColor: '#37ADD4',
  },
  submit: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#FFFF',
    fontWeight: 600,
  },
}));

const HomeForm = ({plans}) => {
      const classes = styles();
    return (
      <Grid
        container
        item
        md={3}
        justify="center"
        alignItems="center"
      >
        <TextField
          id="outlined-full-width"
          label="Name"
          fullWidth
          className={classes.input}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Email"
          fullWidth
          className={classes.input}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          select
          label="Type of Plan"
          fullWidth
          className={classes.input}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        >
          {plans.slice(12, 15).map((plan, i) => {
            return (
              <MenuItem key={plan.node.type} className={classes.menuItem} value={plan.node.type}>
                
                  {plan.node.type}
               
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          id="outlined-full-width"
          label="Tell us what you need"
          fullWidth
          className={classes.input}
          margin="normal"
          multiline
          rows={7}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Grid
          container
          item
          justify="flex-end"
          alignItems="center"
          className={classes.btn}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.btnForm}
          >
            <Typography variant="primary" className={classes.submit}>
              Submit
            </Typography>
          </Button>
        </Grid>
      </Grid>
    );
}

export default HomeForm
