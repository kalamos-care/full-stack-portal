import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
// import { makeStyles } from '@material-ui/core/styles';

import { Admin } from './admin';
import { Home, Login, SignUp } from './marketing';
import { ProviderDashboard } from './clinic-app';
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
      <PrivateRoute path="/clinic/" component={ProviderDashboard} />
      <Route exact path="/" component={Home} />
      <Route path="/company" component={Home} />
      <Route path="/product" component={Home} />
      <Route path="/resources" component={Home} />
      <Route path="/legal" component={Home} />
    </Switch>
  );
};