import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  form: {
    marginBottom: theme.spacing(4),
  },
  submit: {

  },
}));

export const NewPatient: FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Typography
        component="h4"
        variant="h5"
        color="textPrimary"
        gutterBottom
      >
        Invite a new patient
      </Typography>
      </Grid>
      <Grid item xs={12}>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lasstname"
            label="Lask Name"
            name="lasstname"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            label="Phone Number"
            name="phonenumber"
            id="phonenumber"
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
            Invite Patient
          </Button>
        </form>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body1" paragraph>
        Patients must sign HIPAA Auth waivers to allow Kalamos to communicate with your clinic and our lab partners.
      </Typography>
      <Typography variant="body1" paragraph>
        You'll be notified once the patient has completed their registration and can then place orders.
      </Typography>
      </Grid>
    </Grid>
  );
};