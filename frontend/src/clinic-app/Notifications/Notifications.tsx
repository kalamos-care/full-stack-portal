import React, { FC } from 'react';
import {
    Switch,
    Route,
    useParams,
    Link as RouterLink
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { NotificationsList } from './NotificationsList';

const useStyles = makeStyles((theme) => ({

}));

export const Notifications: FC = () => {
    const classes = useStyles();

    return (
        <Grid>
            <Switch>
                <Route exact path='/clinic/notifications/'>
                    <NotificationsList />
                </Route>
            </Switch>
        </Grid>
    );
};