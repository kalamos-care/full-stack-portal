import React, { FC, useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@material-ui/core';
//import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
      form: {
    
      },
      submit: {
    
      },
}));

export const ContactUs: FC = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Contact Us
        </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="fullname"
                label="Full Name"
                name="fullname"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                label="Message"
                name="message"
                id="message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
          </Button>
            </form>
          </Grid>
        </Grid>
    );
};