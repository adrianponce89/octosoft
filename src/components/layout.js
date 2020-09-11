import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import NavBar from './NavBar';

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

const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Octosoft Professionals</title>
    </Helmet>
    <ThemeProvider theme={theme}>
      <NavBar />
      <main>{children}</main>
    </ThemeProvider>
  </LocaleContext.Provider>
);

export { Layout, LocaleContext };
