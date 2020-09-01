import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import Contact from './pages/contact/contact';
import Testimonies from './pages/testimonies/testimonies';
import { SERVICES } from './SERVICES';
import Service from './pages/service/service';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import ClientSupport from './pages/ClientSupport';
import OurServices from './pages/OurServices';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import BorderlessIdentities from './pages/BorderlessIdentities';
import Posts from './pages/Posts';
import './App.css';

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
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/assistance">
            <Service service={SERVICES.assistance} />
          </Route>
          <Route path="/design">
            <Service service={SERVICES.design} />
          </Route>
          <Route path="/development">
            <Service service={SERVICES.development} />
          </Route>
          <Route path="/education">
            <Service service={SERVICES.education} />
          </Route>
          <Route path="/language">
            <Service service={SERVICES.language} />
          </Route>
          <Route path="/marketing">
            <Service service={SERVICES.marketing} />
          </Route>
          <Route path="/media">
            <Service service={SERVICES.media} />
          </Route>
          <Route path="/productions">
            <Service service={SERVICES.production} />
          </Route>

          <Route path="/contact" component={Contact} />
          <Route path="/testimonies" component={Testimonies} />
          <Route path="/clientsupport" component={ClientSupport} />
          <Route path="/ourservices" component={OurServices} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/news" component={News} />
          <Route
            path="/borderlessIdentities"
            component={BorderlessIdentities}
          />
          <Route path="/posts/:slug" component={Posts} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
