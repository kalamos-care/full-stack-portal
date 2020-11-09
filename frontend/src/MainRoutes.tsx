import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
// import { makeStyles } from '@material-ui/core/styles';

import { Admin } from './admin';
import { Home, Login, SignUp } from './marketing';
import { Dashboard } from './clinic-app';
import { PrivateRoute } from './PrivateRoute';
import { logout } from './utils/auth';

export const MainRoutes: FC = () => {
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
      <PrivateRoute path="/clinic/" component={Dashboard} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};