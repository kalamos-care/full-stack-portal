import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import LandingPage from './LandingPage'


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
  footer: {
    display: 'flex',
    position: 'sticky',
    bottom: 0,
  },
  copyright: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));


export const Home: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.marketing}>
      <header className={classes.header}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
            // component={Link}
            // to="/"
            >
              Kalamos Care
        </Typography>
            <Button color="inherit">
              <a href="/login">
                Login
                            </a>
            </Button>
            <Button color="inherit">
              <a href="/signup">
                Sign Up
                            </a>
            </Button>
          </Toolbar>
        </AppBar>
      </header>
      <main className={classes.main}>
        <LandingPage />
      </main>
      <footer className={classes.footer}>
        <Box className={classes.copyright}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://kalamos.care/">
              Kalamos Care
                    </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};