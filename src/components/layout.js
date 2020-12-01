import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import NavBar from './NavBar';
import Footer from './Footer';

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
  borderRadius: '8px',
  textShadow: '0px 5px 4px rgba(0, 0, 0, 0.50)',
  boxShadow:
    'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
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

  return (
    <LocaleContext.Provider value={{ locale }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Octosoft Professionals</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900"
          rel="stylesheet"
        ></link>
      </Helmet>
      <ThemeProvider theme={theme}>
        <NavBar home={pathname === '/'} />
        <main>
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </LocaleContext.Provider>
  );
};

export { Layout, LocaleContext };
