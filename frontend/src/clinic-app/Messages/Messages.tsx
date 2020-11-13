import React, { FC } from 'react';
import {
    Switch,
    Route,
    Link as RouterLink
  } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { MessageList } from './MessageList';


const useStyles = makeStyles((theme) => ({

}));

export const Messages: FC = () => {
    const classes = useStyles();
    
    return (
        <Grid>
            <Switch>
                <Route exact path="/clinic/messages/">
                    <MessageList />
                </Route>
                <Route exact path="/clinic/messages/new">
                    {/* <NewMessage /> */}
                </Route>
                <Route path="/clinic/messages/:id">
                    {/* <MessageDetail /> */}
                </Route>
            </Switch>
        </Grid>
    );
};