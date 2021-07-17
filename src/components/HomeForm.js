import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  input: {
    marginBottom: 20,
    fontFamily: 'Montserrat',
  },
  btn: {
    backgroundColor: '#37add4',
  },
  submit: { fontFamily: 'Montserrat', color:'#FFFF' },
}));

const HomeForm = () => {
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
          label="Type of Plan"
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
        <Grid container item justify="flex-end" alignItems="center">
          <Button
            variant="contained"
            color="primary"
          >
            <Typography variant="primary"className={classes.submit}>Submit
            </Typography>
          </Button>
        </Grid>
      </Grid>
    );
}

export default HomeForm
