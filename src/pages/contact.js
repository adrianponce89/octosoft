import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Container from '../components/Container';
import BackgroundImage from '../assets/Trama.png';
import { submitForm, darkenColor } from '../utils';
import PrimaryInput from '../components/PrimaryInput';

const useStyles = makeStyles((theme) => ({
  root: {},
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
    color: (props) => props.contactBanner.color,
    width: '100%',
  },
  division: {
    width: 0,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: (props) => props.contactBanner.color,
    marginTop: 60,
    marginBottom: 60,
  },
  imgContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  smartphoneImg: {
    width: '100%',
    height: '100%',
    backgroundImage: (props) =>
      `url(${props.contactBanner.image.file.url})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
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
    background: (props) => props.contactBanner.color,
    '&:hover': {
      background: (props) =>
        darkenColor(props.contactBanner.color, 0.8),
    },
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

  const banners = get(props, 'data.allContentfulBanners.edges');
  const contactBanner = banners.find(
    ({ node }) => node.type === 'ContactUs',
  ).node;

  const classes = useStyles({ contactBanner });

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
      innerBackground={'none'}
    >
      <form
        name="contact"
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className={classes.formContainer}>
          <Hidden smDown>
            <Grid item className={classes.imgContainer} md={5}>
              <div className={classes.smartphoneImg} />
            </Grid>
            <div className={classes.division} />
          </Hidden>
          <Grid
            className={classes.gridContainer}
            container
            md={6}
            spacing={3}
          >
            <h1 className={classes.title}>{contactBanner.title}</h1>

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
        </div>
      </form>
    </Container>
  );
};

export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulBanners {
      edges {
        node {
          title
          color
          image {
            file {
              url
            }
          }
          type
        }
      }
    }
  }
`;
