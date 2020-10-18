import React, { useState } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Smartphone from '../assets/smartphone.jpg';
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
  smartphoneImg: {
    width: '100%',
    paddingBottom: '215%',
    backgroundImage: `url(${Smartphone})`,
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
        <h1>Client Support</h1>
        <div className={classes.formContainer}>
          <Grid
            className={classes.gridContainer}
            container
            md={8}
            spacing={3}
          >
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="NameInput">
                  Client Name
                </InputLabel>
                <OutlinedInput
                  id="NameInput"
                  value={clientName}
                  name="clientName"
                  onChange={({ target }) =>
                    setClientName(target.value)
                  }
                  label="Client Name"
                  required
                />
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="IDInput">Client ID</InputLabel>
                <OutlinedInput
                  id="IDInput"
                  value={clientID}
                  name="clientID"
                  onChange={({ target }) => setClientID(target.value)}
                  label="Client ID"
                  required
                />
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={12}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="ServiceInput">
                  Name your problem
                </InputLabel>
                <Select
                  label="Name your problem"
                  id="ServiceInput"
                  value={problem}
                  name="problem"
                  onChange={({ target }) => setProblem(target.value)}
                  required
                >
                  <MenuItem value="General">General</MenuItem>
                  {services.map(({ node }) => (
                    <MenuItem value={node.title}>
                      {node.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="EmailInput">
                  Your E-Mail
                </InputLabel>
                <OutlinedInput
                  id="EmailInput"
                  value={email}
                  name="email"
                  onChange={({ target }) => setEmail(target.value)}
                  label="Your E-Mail"
                  required
                />
              </FormControl>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
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
