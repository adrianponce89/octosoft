import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Contact } from './pages/contact/contact';
import { Testimonies } from './pages/testimonies/testimonies';
import { SERVICES } from './SERVICES';
import { Service } from './pages/service/service';
import { Home } from './pages/Home';
import './index.css';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';

import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#007bff',
    },
    background: {
      default: '#ECECEC',
      paper: 'white',
    },
  },
  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: 'white',
        color: 'black',
      },
    },
  },
});

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Octosoft</title>
        </Helmet>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path={'/assistance'}>
            {' '}
            <Service service={SERVICES.assistance} />{' '}
          </Route>
          <Route path={'/design'}>
            {' '}
            <Service service={SERVICES.design} />{' '}
          </Route>
          <Route path={'/development'}>
            {' '}
            <Service service={SERVICES.development} />{' '}
          </Route>
          <Route path={'/education'}>
            {' '}
            <Service service={SERVICES.education} />{' '}
          </Route>
          <Route path={'/language'}>
            {' '}
            <Service service={SERVICES.language} />{' '}
          </Route>
          <Route path={'/marketing'}>
            {' '}
            <Service service={SERVICES.marketing} />{' '}
          </Route>
          <Route path={'/media'}>
            {' '}
            <Service service={SERVICES.media} />{' '}
          </Route>
          <Route path={'/productions'}>
            {' '}
            <Service service={SERVICES.production} />{' '}
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/testimonies">
            <Testimonies />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
