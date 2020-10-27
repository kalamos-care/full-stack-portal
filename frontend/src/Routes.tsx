import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

import { Admin } from './admin';
import { Home, Login, SignUp, ProviderDash, PrivateRoute } from './views';
import { logout, isAuthenticated } from './utils/auth';

export const Routes: FC = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route
        path="/logout"
        render={() => {
          logout();
          history.push('/');
          return null;
        }}
      />
      <PrivateRoute path="/provider-dashboard" component={ProviderDash} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};