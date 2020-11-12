import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import { getUserInfo } from '../../utils/api';


const useStyles = makeStyles((theme) => ({

}));

export const UserSettings: FC = () => {
  const classes = useStyles();



  return (
    <Grid>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>List user settings here:</Typography>
      <p>
        <code>Replace this page with a dropdown and insert user info here</code>
      </p>
    </Grid>
  );
};