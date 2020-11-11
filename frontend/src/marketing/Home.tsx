import React, { FC, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink, 
  LinkProps as RouterLinkProps
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Header from './layout/Header';
import Footer from './layout/Footer';

import { SignUp } from './SignUp';
import { Login } from './Login';

import LandingPage from './LandingPage';
import AboutUs from './company/AboutUs';
import { Blog } from './company/blog/Blog';
import { Features } from './product/Features';
import { Pricing } from './product/Pricing';
import { FAQ } from './resources/FAQ';
import { ApiDocs } from './resources/ApiDocs';
import { PrivacyPolicy } from './legal/PrivacyPolicy';
import { TermsOfUse } from './legal/TermsOfUse';


const useStyles = makeStyles((theme) => ({
  marketing: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  footer: {

  },
}));


export const Home: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.marketing}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
      <Box>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/company/about-us">
              <AboutUs />
            </Route>
            <Route exact path="/company/blog">
              <Blog />
            </Route>
            <Route exact path="/product/features">
              <Features />
            </Route>
            <Route exact path="/product/pricing">
              <Pricing />
            </Route>
            <Route exact path="/resources/faq">
              <FAQ />
            </Route>
            <Route exact path="/resources/api">
              <ApiDocs />
            </Route>
            <Route exact path="/legal/terms-of-use">
              <TermsOfUse />
            </Route>
            <Route exact path="/legal/privacy-policy">
              <PrivacyPolicy />
            </Route>
          </Switch>
    </Box>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Box>
  );
};