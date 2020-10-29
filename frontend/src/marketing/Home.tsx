import React, { FC, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

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


export const Home: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.marketing}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <LandingPage />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};