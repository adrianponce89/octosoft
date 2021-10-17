import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from './Container';
import BackgroundImage from '../assets/Trama.png';
import { submitForm } from '../utils';
import PrimaryInput from './PrimaryInput';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
  },
  formContainer: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  gridContainer: {
    flex: 1,
    margin: 30,
  },
  gridItem: {
    padding: '0 5px',
  },
  title: {
    margin: '10px 10px 30px 0',
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 48,
    lineHeight: 1,
    width: '100%',
  },
  division: {
    width: 0,
    borderWidth: 2,
    borderStyle: 'solid',
    marginTop: 60,
    marginBottom: 60,
  },
  imgContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    width: 200,
    borderRadius: 0,
  },
}));

const Contact = (props) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm('contact', {
      name,
      subject,
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
    setSubject('');
    setEmail('');
    setPhone('');
    setContent('');
  };

  return (
    <Container
      className={classes.root}
      background={`url(${BackgroundImage})`}
      innerBackground={'none'}
    >
      <form
        name="contact"
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className={classes.formContainer}>
          <Grid item className={classes.imgContainer} md={4}>
            <div className={classes.smartphoneImg} />
          </Grid>
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
                id="SubjectInput"
                value={subject}
                name="subject"
                onChange={({ target }) => setSubject(target.value)}
                label="Subject (Optional)"
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
        </div>
      </form>
    </Container>
  );
};

export default Contact;
