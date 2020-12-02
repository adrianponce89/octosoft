import React, { useState } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import Smartphone from '../assets/smartphone.jpg';
import Container from '../components/Container';
import BackgroundImage from '../assets/Trama.png';
import { submitForm, darkenColor } from '../utils';
import PrimaryInput from '../components/PrimaryInput';
import PrimarySelect from '../components/PrimarySelect';

const useStyles = makeStyles((theme) => ({
  root: {},
  formContainer: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  gridContainer: {
    flex: 1,
    margin: 40,
  },
  gridItem: {
    padding: '0 5px',
  },
  title: {
    margin: '20px 10px 40px 0',
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 48,
    color: (props) => props.clientSupportBanner.color,
  },
  division: {
    width: 0,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: (props) => props.clientSupportBanner.color,
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
      `url(${props.clientSupportBanner.image.file.url})`,
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
    background: (props) => props.clientSupportBanner.color,
    '&:hover': {
      background: (props) =>
        darkenColor(props.clientSupportBanner.color, 0.8),
    },
  },
}));

const ClientSupport = (props) => {
  const [clientName, setClientName] = useState('');
  const [clientID, setClientID] = useState('');
  const [problem, setProblem] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  const services = get(props, 'data.allContentfulService.edges');

  const banners = get(props, 'data.allContentfulBanners.edges');
  const clientSupportBanner = banners.find(
    ({ node }) => node.type === 'ClientSupport',
  ).node;

  const classes = useStyles({ clientSupportBanner });

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm('clientsupport', {
      clientName,
      clientID,
      problem,
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

    setClientName('');
    setClientID('');
    setProblem('');
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
        name="clientsupport"
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="clientsupport" />
        <div className={classes.formContainer}>
          <Grid
            className={classes.gridContainer}
            container
            md={6}
            spacing={3}
          >
            <h1 className={classes.title}>
              {clientSupportBanner.title}
            </h1>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <PrimaryInput
                id="NameInput"
                value={clientName}
                name="clientName"
                onChange={({ target }) => setClientName(target.value)}
                label="Client Name"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <PrimaryInput
                id="IDInput"
                value={clientID}
                name="clientID"
                onChange={({ target }) => setClientID(target.value)}
                label="Client ID"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12}>
              <PrimarySelect
                label="Name your problem"
                id="ServiceInput"
                value={problem}
                name="problem"
                onChange={({ target }) => setProblem(target.value)}
                required
              >
                <MenuItem value="General">General</MenuItem>
                {services.map(({ node }) => (
                  <MenuItem value={node.title}>{node.title}</MenuItem>
                ))}
              </PrimarySelect>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <PrimaryInput
                id="EmailInput"
                value={email}
                name="email"
                onChange={({ target }) => setEmail(target.value)}
                label="Your E-Mail"
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
            <div className={classes.division} />
            <Grid item className={classes.imgContainer} md={5}>
              <div className={classes.smartphoneImg} />
            </Grid>
          </Hidden>
        </div>
      </form>
    </Container>
  );
};

export default ClientSupport;

export const pageQuery = graphql`
  query ClientSupportQuery {
    allContentfulService {
      edges {
        node {
          title
        }
      }
    }
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
