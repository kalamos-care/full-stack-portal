import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
// import { makeStyles } from '@material-ui/core/styles';

import { Admin } from './admin';
import { Home } from './marketing';
import { ProviderDashboard } from './clinic-app';
import { PrivateRoute } from './PrivateRoute';
import { logout } from './utils/auth';

export const MainRoutes: FC = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <PrivateRoute path="/clinic/" component={ProviderDashboard} />
      <Route path="/company" component={Home} />
      <Route path="/product" component={Home} />
      <Route path="/resources" component={Home} />
      <Route path="/legal" component={Home} />
      <Route path="/login" component={Home} />
      <Route path="/signup" component={Home} />
      <Route
        path="/logout"
        render={() => {
          logout();
          history.push('/');
          return null;
        }}
      />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
