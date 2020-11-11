import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  link: {
    color: '#ff6e6c',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


const AboutUs: FC = () => {
  const classes = useStyles();

  return (
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            About Us
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Put our story here!
            </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Create Your Account
                  </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" component={RouterLink} to="/">
                  Read More About Us
                  </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default AboutUs;