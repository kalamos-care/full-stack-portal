import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({}));

export const NewPatient: FC = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Typography
        component="h4"
        variant="h5"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Invite a patient to sign HIPAA Auth waivers
      </Typography>
    </Grid>
  );
};
