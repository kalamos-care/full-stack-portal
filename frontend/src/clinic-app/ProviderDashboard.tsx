import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link as RouterLink,
} from 'react-router-dom';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Container } from '@material-ui/core/';

import { Notifications } from './Notifications/Notifications';
import { Patients } from './Patients/Patients';
import { Messages } from './Messages/Messages';
import { UserSettings } from './Settings/UserSettings';

import Header from './layout/Header';
import Footer from './layout/Footer';

const useStyles = makeStyles((theme) => ({
  clinicApp: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
  },
  footer: {
    display: 'flex',
    position: 'sticky',
    bottom: '0',
  },
}));

export const ProviderDashboard: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const clinics = localStorage.getItem('clinics');
  console.log(clinics);

  // const [auth, setAuth] = React.useState(true);

  {/*
    1. Check to see what clinics the provider has access to
      1a. If no practices, launch clinic search/creation process
    2. Append clinic # to the url and use that to pull data
    3. Allow provider to switch clinics with upper right action items
  */}

  return (
    <Box className={classes.clinicApp}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/clinic">
              <Redirect to="/clinic/notifications" />
            </Route>
            <Route
              exact
              path="/clinic/notifications"
              component={Notifications}
            />
            <Route path="/clinic/patients" component={Patients} />
            <Route exact path="/clinic/messages" component={Messages} />
            <Route exact path="/clinic/settings/" component={UserSettings} />
          </Switch>
          {/* <InstallPWA /> */}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Box>
  );
};
