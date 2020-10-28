import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
// import { makeStyles } from '@material-ui/core/styles';

import { Admin } from './admin';
import { Home, AboutUs, Login, SignUp } from './marketing';
import { PrivateRoute, ProviderDash, UserSettings } from './clinic';
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
      <PrivateRoute path="/clinic" component={ProviderDash} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};