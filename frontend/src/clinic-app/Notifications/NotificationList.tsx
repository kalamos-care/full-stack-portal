import React, { FC } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import { Alert, AlertTitle } from '@material-ui/lab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    notification: {
        marginTop: theme.spacing(2)
    },
}));

export const NotificationsList: FC = () => {
    const classes = useStyles();

    return (
        <Grid>
            <Grid>
                <Typography component="h4" variant="h5" gutterBottom>Notifications</Typography>
                <Typography component="h5" variant="h6" gutterBottom>Here's what happened while you were away</Typography>
            </Grid>
            
                <Alert className={classes.notification} severity="error">
                    <AlertTitle>Error</AlertTitle>
  This is an error alert — <RouterLink to={'/clinic/notifications/error'}><strong>check it out!</strong></RouterLink>
                </Alert>
            <Alert className={classes.notification} severity="warning">
                <AlertTitle>Warning</AlertTitle>
This is a warning alert — <RouterLink to="/clinic/notifications/warning"><strong>check it out!</strong></RouterLink>
            </Alert>
            <Alert className={classes.notification} severity="info">
                <AlertTitle>Info</AlertTitle>
  This is an info alert — <RouterLink to="/clinic/notifications/info"><strong>check it out!</strong></RouterLink>
            </Alert>
            <Alert className={classes.notification} severity="success">
                <AlertTitle>Success</AlertTitle>
  This is a success alert — <RouterLink to="/clinic/notifications/success"><strong>check it out!</strong></RouterLink>
            </Alert>
        </Grid>
    );
};