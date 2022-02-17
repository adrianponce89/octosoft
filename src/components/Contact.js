import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { submitForm } from '../utils';
import discord from '../assets/discord.png';
import whatsapp from '../assets/whatsapp.png';
import telegram from '../assets/telegram.png';
import {
  FormControl,
  TextField,
  Typography,
} from '@material-ui/core';

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
    <div className={classes.root} innerBackground={'none'}>
      <div className={classes.organize}>
        <div className={classes.firstColumn}>
          <Typography variant="h4" className={classes.title}>
            Contact Us
          </Typography>
          <div className={classes.sortIcons}>
            <a href={`https://wa.me/${14152864255}`}>
              <img
                className={classes.icon}
                src={whatsapp}
                alt="whatsapp"
              />
            </a>
            <a href={`https://telegram.me/${14152864255}`}>
              <img
                className={classes.icon}
                src={telegram}
                alt="telegram"
              />
            </a>
            <a href={`https://discord.gg/rWPADbXrEd`}>
              <img
                className={classes.icon}
                src={discord}
                alt="discord"
              />
            </a>
          </div>
        </div>

        <form
          name="contact"
          onSubmit={handleSubmit}
          data-netlify="true"
          className={classes.secondColumn}
        >
          <FormControl
            variant="outlined"
            fullWidth
            className={classes.input}
          >
            <TextField
              id="NameInput"
              value={name}
              name="name"
              onChange={({ target }) => setName(target.value)}
              label="Name"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.input}
            fullWidth
          >
            <TextField
              id="SubjectInput"
              value={subject}
              name="subject"
              onChange={({ target }) => setSubject(target.value)}
              label="Subject (Optional)"
              variant="outlined"
            />
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.input}
            fullWidth
          >
            <TextField
              id="EmailInput"
              value={email}
              name="email"
              type="email"
              onChange={({ target }) => setEmail(target.value)}
              label="Your Email"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.input}
            fullWidth
          >
            <TextField
              id="PhoneInput"
              value={phone}
              name="phone"
              onChange={({ target }) => setPhone(target.value)}
              label="Your Phone Number"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.textArea}
            fullWidth
          >
            <TextField
              id="ContentInput"
              value={content}
              name="content"
              onChange={({ target }) => setContent(target.value)}
              label="Your message"
              variant="outlined"
              multiline
              maxRows={5}
              inputProps={{ maxLength: 150 }}
            />
          </FormControl>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100vw',
    margin: '0',
    maxWidth: '100%',
    backgroundColor: 'white',
    height: '100%',
  },
  organize: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  firstColumn: {
    display: 'flex',
    width: '20%',
    flexDirection: 'column',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  secondColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    flexWrap: 'wrap',
    height: '18rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '5vh',
    color: '#33adff',
    fontWeight: '700',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  icon: {
    width: '3rem',
    height: '3rem',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  input: {
    display: 'flex',
    width: '20rem',
    padding: '1%',
    fontSize: '2vh',
    '& div': {
      width: '20rem',
      height: '3.5rem',
      '& label ': {
        fontSize: '2vh',
        fontFamily: 'Montserrat',
      },
      '& label.Mui-focused': {
        fontSize: '2vh',
      },
    },
  },
  textArea: {
    display: 'flex',
    width: '20rem',
    padding: '1%',
    fontSize: '2vh',
    '& div': {
      alignItems: 'flex-start',
      width: '20rem',
      height: '8.5rem',
      '& label ': {
        fontSize: '2vh',
        fontFamily: 'Montserrat',
      },
      '& label.Mui-focused': {
        fontSize: '2vh',
      },
    },
  },
}));

export default Contact;
