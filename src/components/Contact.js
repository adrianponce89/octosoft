import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from './Container';
// import BackgroundImage from '../assets/Trama.png';
import { submitForm } from '../utils';
import PrimaryInput from './PrimaryInput';
import discord from '../assets/discord.png';
import whatsapp from '../assets/whatsapp.png';
import telegram from '../assets/telegram.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    padding: 0,
    maxWidth: '100%',
    backgroundColor: 'white',
    height: '100%',
  },
  formContainer: {
    display: 'flex',
    alignItems: 'space-between',
    justifyContent: 'center',
    width: '100%',
  },
  outsideBox: {
    justifyContent: 'space-between',
  },
  gridContainer: {
    margin: '45px 30px 30px 30px',
  },
  gridItem: {
    padding: '0 5px',
    flexBasis: 0,
    margin: '0 15px 15px 15px',

    '& textarea': {
      height: '70px',
    },

    '& div div > div': {
      padding: '0 !important',
      width: '400px',
      borderRadius: '4px',
    },

    '& > label': {
      backgroundColor: 'white',
      padding: '0 8px',
      top: '8px',
      left: '15px',
      position: 'relative',
      zIndex: '100',
      fontWeight: 'bold',
    },
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',

    '&:after': {
      content: '"Contact us"',
      color: '#33adff',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      fontSize: '50px',
      top: '35px',
      position: 'absolute',
    },
  },
  buttonContainer: {
    flex: 1,
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    padding: '10px 20px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#33adff',
    color: 'black',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    position: 'relative',
    left: '128px',
    top: '-10px',
  },
  smartphoneImg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: '50px',
    width: '50px',
    position: 'relative',
    top: '130px',
    margin: '0 20px',
  },
  phoneInput: {
    top: '-22px',
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
    <div
      className={classes.root}
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
            <div className={classes.smartphoneImg}>
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
                variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
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
                label="Your message"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <PrimaryInput
                className={classes.phoneInput}
                id="PhoneInput"
                value={phone}
                name="phone"
                onChange={({ target }) => setPhone(target.value)}
                label="Your Phone Number"
                variant="outlined"
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
                Submit
              </Button>
            </div>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default Contact;
