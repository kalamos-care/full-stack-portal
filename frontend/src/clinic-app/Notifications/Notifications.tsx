import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Alert, AlertTitle } from '@material-ui/lab';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    notification: {
        marginTop: theme.spacing(2)
    },
}));

export const Notifications: FC = () => {
    const classes = useStyles();

    return (
        <Grid>
            <h1>Here's what happened while you were away</h1>
            <Alert className={classes.notification} severity="error">
                <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>check it out!</strong>
            </Alert>
            <Alert className={classes.notification} severity="warning">
                <AlertTitle>Warning</AlertTitle>
  This is a warning alert — <strong>check it out!</strong>
            </Alert>
            <Alert className={classes.notification} severity="info">
                <AlertTitle>Info</AlertTitle>
  This is an info alert — <strong>check it out!</strong>
            </Alert>
            <Alert className={classes.notification} severity="success">
                <AlertTitle>Success</AlertTitle>
  This is a success alert — <strong>check it out!</strong>
            </Alert>
        </Grid>
    );
};