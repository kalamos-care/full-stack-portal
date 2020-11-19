import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Alert, AlertTitle } from '@material-ui/lab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  notification: {
    marginTop: theme.spacing(2),
  },
}));


const notifications = [
  {
    id: 1,
    severity: 'error',
    title: 'Error',
    message: 'This is an error alert — check it out!',
    cta: 'Click',
    url: '/clinic/notifications/error',
  },
  {
    id: 2,
    severity: 'warning',
    title: 'Warning',
    message: 'This is a warning alert — check it out!',
    cta: 'Click',
    url: '/clinic/notifications/warning',
  },
  {
    id: 3,
    severity: 'info',
    title: 'Info',
    message: 'This is an info alert — check it out!',
    cta: 'Click',
    url: '/clinic/notifications/info',
  },
  {
    id: 4,
    severity: 'success',
    title: 'Success',
    message: 'This is a success alert — check it out!',
    cta: 'Click',
    url: '/clinic/notifications/error',
  },
];

type Severity = "error" | "success" | "info" | "warning" | undefined;
type Notification = {
  id: number,
  severity: Severity,
  title: string,
  message: string,
  cta: string,
  url: string,
};

{/*
function NotificationAlert(notification: Notification) {
  return (
    <Alert severity={notification.severity} key={notification.id}>
      <AlertTitle>{notification.title}</AlertTitle>
      {notification.message}
      <Button
        color="inherit"
        size="small"
        component={RouterLink}
        to={notification.url}
      >
        {notification.cta}
      </Button>
    </Alert>
  )
};
*/}


export const NotificationsList: FC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h4" variant="h5" gutterBottom>
          Notifications
        </Typography>
        <Typography component="h5" variant="h6" gutterBottom>
          Here's what happened while you were away
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          List alerts detailing action items. If the account is new, have the "tutorial" start here.
        </Typography>
      </Grid>
      {/*
            Need to expressly define severity types in order to insert 
            {notification.severity}
            
      {notifications.map((notification) => (
        <NotificationAlert notification = {notification} />
      ))}
      */}
    </Grid>
  );
};


