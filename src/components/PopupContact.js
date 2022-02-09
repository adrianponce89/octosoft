import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { submitForm } from '../utils';
import PrimaryInput from './PrimaryInput';
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
        <input
          className={classes.input}
          id="NameInput"
          value={name}
          name="name"
          onChange={({ target }) => setName(target.value)}
          placeholder="Name"
          required={true}
        />
        <input
          className={classes.input}
          id="SubjectInput"
          value={subject}
          name="subject"
          onChange={({ target }) => setSubject(target.value)}
          placeholder="Subject (Optional)"
          variant="outlined"
        />
        <input
          className={classes.input}
          id="EmailInput"
          value={email}
          name="email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Your Email"
          required={true}
        />
        <input
          className={classes.input}
          id="PhoneInput"
          value={phone}
          name="phone"
          onChange={({ target }) => setPhone(target.value)}
          placeholder="Your Phone Number"
          required={true}
        />
        <textarea
          className={classes.textarea}
          id="ContentInput"
          value={content}
          name="content"
          onChange={({ target }) => setContent(target.value)}
          placeholder="Your Message"
          style={{ resize: 'none' }}
        />

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
    height: '90%',
    top: '5%',
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
    marginBottom: '2rem',
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  input: {
    width: '80%',
    height: '2rem',
    marginBottom: '1rem',
    fontFamily: 'Montserrat',
    fontSize: '2vh',
  },
  textarea: {
    width: '80%',
    height: '8rem',
    marginBottom: '1rem',
    fontFamily: 'Montserrat',
    fontSize: '2vh',
  },
}));

export default PopUpContact;
