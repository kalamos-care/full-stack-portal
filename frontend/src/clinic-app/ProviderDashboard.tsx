import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link as RouterLink
} from "react-router-dom";
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import {
  Box, Container
} from '@material-ui/core/';

import { Notifications } from './Notifications/Notifications';
import { Patients } from './Patients/Patients';
import { Messages } from './Messages/Messages';
import { UserSettings } from './Settings/UserSettings'

import Header from './layout/Header';
import Footer from './layout/Footer';


const useStyles = makeStyles((theme) => ({
  app: {
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
    //fontSize: 'calc(10px + 2vmin)',
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

  // const [auth, setAuth] = React.useState(true);


  return (
    <Box className={classes.app}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/clinic">
              <Redirect to="/clinic/notifications" />
            </Route>
            <Route exact path="/clinic/notifications" component={Notifications} />
            <Route path="/clinic/patients" component={Patients} />
            <Route exact path="/clinic/messages" component={Messages} />
            <Route exact path="/clinic/settings/" component={UserSettings} />
          </Switch>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Box>
  );
};