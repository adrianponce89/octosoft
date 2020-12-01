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
import BackgroundImage from '../assets/Background.png';
import { submitForm } from '../utils';
import PrimaryInput from '../components/PrimaryInput';
import PrimarySelect from '../components/PrimarySelect';

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
  smartphoneImg: {
    width: '100%',
    paddingBottom: '225%',
    backgroundImage: `url(${Smartphone})`,
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

const ClientSupport = (props) => {
  const [clientName, setClientName] = useState('');
  const [clientID, setClientID] = useState('');
  const [problem, setProblem] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const classes = useStyles();

  const services = get(props, 'data.allContentfulService.edges');

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
    >
      <form
        name="clientsupport"
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="clientsupport" />
        <h1 className={classes.title}>Client Support</h1>
        <div className={classes.formContainer}>
          <Grid
            className={classes.gridContainer}
            container
            md={8}
            spacing={3}
          >
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
            <Grid item className={classes.imgContainer} md={3}>
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
  }
`;
