import React, { FC } from 'react';
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
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Here's what happened while you were away</Typography>
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