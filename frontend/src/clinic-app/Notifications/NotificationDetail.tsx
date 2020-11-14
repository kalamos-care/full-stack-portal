import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({}));

export const NotificationDetail: FC = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Typography component="h4" variant="h5" gutterBottom>
        Notification Details
      </Typography>
      <Typography component="h5" variant="h6" gutterBottom>
        <code>List notification type here</code>
      </Typography>
    </Grid>
  );
};
