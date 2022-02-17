import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { submitForm } from '../utils';
import { FormControl, TextField } from '@material-ui/core';
import discord from '../assets/discord.png';
import whatsapp from '../assets/whatsapp.png';
import telegram from '../assets/telegram.png';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const PopUpContact = (props) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content) {
      alert('Please fill in the message field');
      return;
    }
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
    <div className={classes.root}>
      <Button
        className={classes.closeButton}
        onClick={() => props.handleClose(false)}
      >
        <CloseIcon className={classes.closeIcon} />
      </Button>

      <Typography variant="h4" className={classes.title}>
        Contact Us
      </Typography>
      <div className={classes.container}>
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
          <img className={classes.icon} src={discord} alt="discord" />
        </a>
      </div>
      <form
        name="contact"
        onSubmit={handleSubmit}
        data-netlify="true"
        className={classes.formContainer}
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
            multiline
            label="Your Message*"
            variant="outlined"
            size="small"
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    width: '90%',
    height: '95%',
    top: '3%',
    left: '5%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxShadow: '-3px 2px 20px 4px rgba(0,0,0,0.50)',
    flexDirection: 'column',
    borderRadius: '10px',
    zIndex: '999',
  },
  closeButton: {
    position: 'absolute',
    top: '1%',
    right: '1%',
  },
  closeIcon: {
    width: '1.5rem',
    height: '1.5rem',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '5vh',
    color: '#33adff',
    fontWeight: '700',
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  container: {
    display: 'flex',
    width: '95%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: '3rem',
    height: '3rem',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  formContainer: {
    display: 'flex',
    width: '95%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: '1.3rem',
    marginBottom: '2rem',
  },

  input: {
    width: '75%',
    padding: '2%',
    marginBottom: '0.2rem',
    fontSize: '2vh',
    '& div': {
      '& label ': {
        fontSize: '2vh',
        fontFamily: 'Montserrat',
      },
      '& label.Mui-focused': {
        fontSize: '1.5vh',
      },
    },
  },
  textArea: {
    width: '75%',
    padding: '2%',
    marginBottom: '0.2rem',
    '& div': {
      height: '8rem',
      '& label ': {
        fontSize: '2vh',
        fontFamily: 'Montserrat',
      },
      '& label.Mui-focused': {
        fontSize: '1.5vh',
      },
    },
  },
  button: {
    marginTop: '0.2rem',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    borderRadius: '10px',
  },
}));

export default PopUpContact;
