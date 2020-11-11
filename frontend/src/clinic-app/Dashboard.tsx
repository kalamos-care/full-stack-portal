import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import {
  BottomNavigation, BottomNavigationAction, Box, Container, Menu, MenuItem, Typography
} from '@material-ui/core/';
// import Link from '@material-ui/core'
import {
  AccountCircle, Chat, Folder
} from '@material-ui/icons/';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { Notifications } from './Notifications/Notifications';
import { Patients } from './Patients/Patients';
import { Messages } from './Messages/Messages';
import { UserSettings } from './Settings/UserSettings'

import Header from './layout/Header';

// import Main from './layout/Main';
// import Footer from './layout/Footer';


const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
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
    fontSize: 'calc(10px + 2vmin)',
  },
  footer: {
    display: 'flex',
    position: 'sticky',
    bottom: 0,
  },
  bottom_nav: {
    width: '100%',
  },
  copyright: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));


export const Dashboard: FC = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  // const [auth, setAuth] = React.useState(true);

  // Bottom Nav state management (I think)
  const [value, setValue] = React.useState('notifications');

  function handleBottomNavChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <Box className={classes.app}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <Container>
          <Switch>
            <Route path="/clinic/notifications" component={Notifications} />
            <Route path="/clinic/patients" component={Patients} />
            <Route path="/clinic/messages" component={Messages} />
            <Route path="/clinic/settings/" component={UserSettings} />
          </Switch>
        </Container>
      </main>
      <footer className={classes.footer}>
        {/*<Footer />*/}
        <BottomNavigation
        className={classes.bottom_nav}
        value={value}
        onChange={handleBottomNavChange}
        showLabels
        >
          <BottomNavigationAction
            label="Notifications"
            value="notifications"
            icon={<NotificationsIcon />}
            component={Link}
            to="/clinic/notifications"
          />
          <BottomNavigationAction
            label="Patients"
            value="patients"
            icon={<Folder />}
            component={Link}
            to="/clinic/patients"
          />
          <BottomNavigationAction
            label="Messages"
            value="messages"
            icon={<Chat />}
            component={Link}
            to="/clinic/messages"
          />
      </BottomNavigation>
      </footer>
    </Box>
  );
};