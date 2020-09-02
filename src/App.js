import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import Contact from './pages/contact';
import Home from './pages';
import NavBar from './components/NavBar';
import ClientSupport from './pages/clientsupport';
import OurServices from './pages/ourservices';
import AboutUs from './pages/aboutus';
import News from './pages/news';
import BorderlessIdentities from './pages/borderlessIdentities';
import Posts from './pages/posts/[slug]';
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
          <Route path="/contact" component={Contact} />
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
