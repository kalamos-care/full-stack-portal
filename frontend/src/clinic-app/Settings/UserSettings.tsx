import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import { getUserInfo } from '../../utils/api';

const useStyles = makeStyles((theme) => ({}));

export const UserSettings: FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Typography component="h4" variant="h5" gutterBottom>
        User Settings
      </Typography>
      <Typography component="h5" variant="h6">
        Manage your account here
      </Typography>
      </Grid>
      <Grid item xs={12}>
        <p>First Name - string*</p>
        <p>Last Name - string*</p>
        <p>Email - string*</p>
        <p>NPI - integer</p>
        <p>State License #s - array/strings</p>
        <p>Medicaid ID - string</p>
        <p>Phone Number - string*</p>
        <p>Email Address - string*</p>
        <p>[Clinic] Mailing Address - string*</p>
        <p>MTL Provider ID - string (probably hide this)</p>
        <p>Publically accepting patients - boolean</p>
      </Grid>
    </Grid>
  );
};
