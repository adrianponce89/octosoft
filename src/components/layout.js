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

const Layout = (props) => {
  const {
    children,
    pageContext: { locale },
    location: { pathname },
  } = props;

  const navProps =
    pathname === '/'
      ? {
          boxShadow: 'none',
          opacity: '0',
          background: 'transparent',
          color: '#fff',
          textShadow: '1px 1px 6px black',
          disableHysteresis: true,
        }
      : {
          boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
          opacity: '1',
          background: '#fff',
          color: 'black',
          textShadow: 'none',
          disableHysteresis: false,
        };

  return (
    <LocaleContext.Provider value={{ locale }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Octosoft Professionals</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <NavBar {...navProps} />
        <main>{children}</main>
      </ThemeProvider>
    </LocaleContext.Provider>
  );
};

export { Layout, LocaleContext };
