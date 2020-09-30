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
import { submitForm } from '../utils';

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
    padding: '20px',
  },
  mailBoxImg: {
    width: '100%',
    paddingBottom: '215%',
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
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [budget, setBudget] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm('contact', {
      name,
      lastName,
      subject,
      budget,
      email,
      phone,
      content,
    })
      .then(() =>
        alert(
          'Your message was received. We will contact you shortly.',
        ),
      )
      .catch((error) => alert(error));

    setName('');
    setLastName('');
    setSubject('');
    setBudget('');
    setEmail('');
    setPhone('');
    setContent('');
  };

  return (
    <Container
      className={classes.root}
      background={`url(${BackgroundImage})`}
    >
      <form
        name="contact"
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h1>Contact Us</h1>
        <div className={classes.formContainer}>
          <Grid
            className={classes.gridContainer}
            container
            md={8}
            spacing={3}
          >
            <Grid className={classes.gridItem} item xs={6} sm={5}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="NameInput">Name</InputLabel>
                <OutlinedInput
                  id="NameInput"
                  value={name}
                  name="name"
                  onChange={({ target }) => setName(target.value)}
                  label="Name"
                  required
                />
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={6} sm={5}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="LastNameInput">
                  Last Name
                </InputLabel>
                <OutlinedInput
                  id="LastNameInput"
                  value={lastName}
                  name="lastName"
                  onChange={({ target }) => setLastName(target.value)}
                  label="LastName"
                  required
                />
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="SubjectInput">
                  Subject (Optional)
                </InputLabel>
                <OutlinedInput
                  id="SubjectInput"
                  value={subject}
                  name="subject"
                  onChange={({ target }) => setSubject(target.value)}
                  label="Subject (Optional)"
                />
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="BudgetInput">
                  Budget (Optional)
                </InputLabel>
                <OutlinedInput
                  id="BudgetInput"
                  value={budget}
                  name="budget"
                  onChange={({ target }) => setBudget(target.value)}
                  label="Budget (Optional)"
                />
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={7}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="EmailInput">
                  Your Email
                </InputLabel>
                <OutlinedInput
                  id="EmailInput"
                  value={email}
                  name="email"
                  onChange={({ target }) => setEmail(target.value)}
                  label="Your Email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={5}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="PhoneInput">
                  Your Phone Number
                </InputLabel>
                <OutlinedInput
                  id="PhoneInput"
                  value={phone}
                  name="phone"
                  onChange={({ target }) => setPhone(target.value)}
                  label="Your Phone Number"
                  required
                />
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  variant="outlined"
                  id="ContentInput"
                  value={content}
                  name="content"
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
            <Grid item className={classes.imgContainer} md={3}>
              <div className={classes.mailBoxImg} />
            </Grid>
          </Hidden>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
