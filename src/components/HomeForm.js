import React, { useState} from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { submitForm } from '../utils';

const styles = makeStyles((theme) => ({
  input: {
    marginBottom: 20,
    borderRadius: 4,
    fontFamily: 'Montserrat',
    '@media (max-width: 760px)': {
      width: '100%',
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
    '&:hover': { backgroundColor: '#7DD1E3' },
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
      const [name, setName] = useState('');
      const [plan, setPlan] = useState('');
      const [email, setEmail] = useState('');
      const [content, setContent] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
        if (name.length !== 0 && plan.length !== 0 && email.length !== 0 && content.length !== 0) {
          
			submitForm('contact', {
            name,
            plan,
            email,
            content,
          })
            .then(() =>
              alert(
                'Your message was received. We will contact you shortly.',
              ),
            )
            .catch((error) => alert(error));

          setName('');
          setPlan('');
          setEmail('');
          setContent('');
        } else {
			alert(
                'Please, complete all fields.',
              )
		}
          
      };

    return (
      <Grid
        container
        item
        xs={10}
        md={3}
        justify="center"
        alignItems="center"
      >
        <form
          name="contact"
          onSubmit={handleSubmit}
          data-netlify="true"
        >
          <TextField
            id="outlined-full-width"
            label="Name"
            fullWidth
            value={name}
            className={classes.input}
            onChange={({ target }) => setName(target.value)}
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
            value={email}
            onChange={({ target }) => setEmail(target.value)}
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
            value={plan}
            onChange={({ target }) => setPlan(target.value)}
            className={classes.input}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          >
            {plans.slice(12, 15).map((plan, i) => {
              return (
                <MenuItem
                  key={plan.node.type}
                  className={classes.menuItem}
                  value={plan.node.type}
                >
                  {plan.node.type}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            id="outlined-full-width"
            label="Let us know what you need"
            fullWidth
            className={classes.input}
            onChange={({ target }) => setContent(target.value)}
            margin="normal"
            multiline
            value={content}
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
              type="submit"
              className={classes.btnForm}
            >
              <Typography
                variant="primary"
                className={classes.submit}
              >
                Submit
              </Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
    );
}

export default HomeForm
