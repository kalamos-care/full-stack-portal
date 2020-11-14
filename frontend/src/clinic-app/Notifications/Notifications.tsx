import React, { FC } from 'react';
import { Switch, Route, useParams, Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { NotificationsList, NotificationDetail } from './';

const useStyles = makeStyles((theme) => ({}));

export const Notifications: FC = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Switch>
        <Route exact path="/clinic/notifications/">
          <NotificationsList />
        </Route>
        <Route path="/clinic/notifications/:id">
          <NotificationDetail />
        </Route>
      </Switch>
    </Grid>
  );
};
