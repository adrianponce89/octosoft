import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MailBox from '../assets/mailbox.jpg';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';

const useStyles = makeStyles((theme) => ({
  root: {},
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {},
  gridItem: {
    padding: '0 5px',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  mailBoxImg: {
    width: '35vh',
    height: '75vh',
    backgroundImage: `url(${MailBox})`,
    backgroundColor: '#cccccc',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '5px',
    boxShadow: '1px 1px 2px gray',
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    margin: 5,
  },
}));

const Contact = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [content, setContent] = useState();
  const classes = useStyles();
  return (
    <Container
      className={classes.root}
      background={`url(${BackgroundImage})`}
    >
      <h1>Contact Us</h1>
      <div className={classes.formContainer}>
        <Grid
          className={classes.gridContainer}
          container
          md={8}
          spacing={3}
        >
          <Grid className={classes.gridItem} item xs={6} sm={4}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel htmlFor="NameInput">Name</InputLabel>
              <OutlinedInput
                id="NameInput"
                value={name}
                onChange={({ target }) => setName(target.value)}
                label="Name"
              />
            </FormControl>
          </Grid>
          <Grid className={classes.gridItem} item xs={6} sm={4}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel htmlFor="SurnameInput">Surname</InputLabel>
              <OutlinedInput
                id="SurnameInput"
                value={surname}
                onChange={({ target }) => setSurname(target.value)}
                label="Surname"
              />
            </FormControl>
          </Grid>
          <Grid className={classes.gridItem} item xs={12}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel htmlFor="SubjectInput">Subject</InputLabel>
              <OutlinedInput
                id="SubjectInput"
                value={subject}
                onChange={({ target }) => setSubject(target.value)}
                label="Subject"
              />
            </FormControl>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={6}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel htmlFor="EmailInput">Your Email</InputLabel>
              <OutlinedInput
                id="EmailInput"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Your Email"
              />
            </FormControl>
          </Grid>
          <Grid
            className={classes.gridItem}
            item
            xs={12}
            sm={6}
            lg={4}
          >
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel htmlFor="PhoneInput">
                Your Phone Number
              </InputLabel>
              <OutlinedInput
                id="PhoneInput"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
                label="Your Phone Number"
              />
            </FormControl>
          </Grid>
          <Grid className={classes.gridItem} item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <TextField
                variant="outlined"
                id="ContentInput"
                value={content}
                onChange={({ target }) => setContent(target.value)}
                multiline
                rows={12}
                size="small"
              />
            </FormControl>
          </Grid>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Send
            </Button>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.imgContainer} md={4}>
            <div className={classes.mailBoxImg} />
          </Grid>
        </Hidden>
      </div>
    </Container>
  );
};

export default Contact;
