import React, { FC } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import { Alert, AlertTitle } from '@material-ui/lab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    notification: {
        marginTop: theme.spacing(2)
    },
}));

const notifications = [
    {
        severity: 'error',
        title: 'Error',
        message: 'This is an error alert — ${<strong>}check it out!${</strong>}',
        cta: 'Click',
        url: '/clinic/notifications/error',
    },
    {
        severity: 'warning',
        title: 'Warning',
        message: 'This is a warning alert — ${<strong>}check it out!${</strong>}',
        cta: 'Click',
        url: '/clinic/notifications/warning',
    },
    {
        severity: 'info',
        title: 'Info',
        message: 'This is an info alert — ${<strong>}check it out!${</strong>}',
        cta: 'Click',
        url: '/clinic/notifications/info',
    },
    {
        severity: 'success',
        title: 'Success',
        message: 'This is a success alert — ${<strong>}check it out!${</strong>}',
        cta: 'Click',
        url: '/clinic/notifications/error',
    },
];



export const NotificationsList: FC = () => {
    const classes = useStyles();
    
    // type Severity = "error" | "success" | "info" | "warning" | undefined;

    return (
        <Grid>
            <Grid>
                <Typography component="h4" variant="h5" gutterBottom>Notifications</Typography>
                <Typography component="h5" variant="h6" gutterBottom>Here's what happened while you were away</Typography>
            </Grid>
            {/*
            Need to expressly define severity types in order to insert 
            {notification.severity}
            */}
            {notifications.map((notification) => (
                <Alert className={classes.notification} severity='info'>
                    <AlertTitle>{notification.title}</AlertTitle>
                    {notification.message}
                    <Button color="inherit" size="small" component={RouterLink} to={notification.url}>
                        {notification.cta}
                    </Button>
                </Alert>
            ))}
        </Grid>
    );
};