import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MailBox from '../assets/mailbox.jpg';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import { submitForm } from '../utils';
import PrimaryInput from '../components/PrimaryInput';

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
  title: {
    margin: '10px 50px',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 20px',
  },
  mailBoxImg: {
    width: '100%',
    paddingBottom: '225%',
    backgroundImage: `url(${MailBox})`,
    backgroundColor: '#cccccc',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow,
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

const Contact = (props) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [budget, setBudget] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const classes = useStyles();

  const {
    location: { hash },
  } = props;

  useEffect(() => {
    if (hash) {
      setSubject(decodeURI(hash.slice(1)));
    }
  }, []);

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
        <h1 className={classes.title}>Contact Us</h1>
        <div className={classes.formContainer}>
          <Grid
            className={classes.gridContainer}
            container
            md={8}
            spacing={3}
          >
            <Grid className={classes.gridItem} item xs={6}>
              <PrimaryInput
                id="NameInput"
                value={name}
                name="name"
                onChange={({ target }) => setName(target.value)}
                label="Name"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              <PrimaryInput
                id="LastNameInput"
                value={lastName}
                name="lastName"
                onChange={({ target }) => setLastName(target.value)}
                label="LastName"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              <PrimaryInput
                id="SubjectInput"
                value={subject}
                name="subject"
                onChange={({ target }) => setSubject(target.value)}
                label="Subject (Optional)"
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              <PrimaryInput
                id="BudgetInput"
                value={budget}
                name="budget"
                onChange={({ target }) => setBudget(target.value)}
                label="Budget (Optional)"
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <PrimaryInput
                id="EmailInput"
                value={email}
                name="email"
                type="email"
                onChange={({ target }) => setEmail(target.value)}
                label="Your Email"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <PrimaryInput
                id="PhoneInput"
                value={phone}
                name="phone"
                onChange={({ target }) => setPhone(target.value)}
                label="Your Phone Number"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12}>
              <PrimaryInput
                id="ContentInput"
                value={content}
                name="content"
                onChange={({ target }) => setContent(target.value)}
                multiline
                rows={12}
                size="small"
              />
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
