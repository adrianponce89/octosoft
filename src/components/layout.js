import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

import NavBar from './NavBar';
import Footer from './Footer';
import { theme } from './Style';

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
