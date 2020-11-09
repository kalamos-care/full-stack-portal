import React, { FC, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  LinkProps
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';

import Header from './layout/Header';
import LandingPage from './LandingPage';
import Footer from './layout/Footer';

// import { isAuthenticated } from '../utils/auth';


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
    //color: 'white',
  },
}));

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export const Home: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.marketing}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Landing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>

            <hr />

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
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Router>
        {/*<LandingPage />*/}
        {/*{children}*/}
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};