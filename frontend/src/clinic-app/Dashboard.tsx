import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar, BottomNavigation, BottomNavigationAction, Box, Container, IconButton, Link, Menu, MenuItem, Toolbar, Typography
} from '@material-ui/core/';
import {
  AccountCircle, Chat, Folder, Notifications
} from '@material-ui/icons/';

//import Notifications from './Notifications';
//import Patients, PatientDetail from './Patients';

// import Header from './layout/Header';
// import Main from './layout/Main';
// import Footer from './layout/Footer';

{/*
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
};
*/}


{/*
const routes = [
  {
    path: "/clinic/notifications",
    component: Notifications,
  },
  {
    path: "/clinic/patients",
    component: Patients,
    routes: [
      {
        path: "/patients/{patient_id}",
        component: PatientDetail,
      }
    ]
  }
];
*/}


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
    //color: 'white',
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

  const [auth, setAuth] = React.useState(true);

  // I think this is meant to log the user out?
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAppBarMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAppBarMenuClose = () => {
    setAnchorEl(null);
  };

  // Bottom Nav state management (I think)
  const [value, setValue] = React.useState('notifications');

  function handleBottomNavChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <Box className={classes.app}>
      <header className={classes.header}>
        {/**<Header />**/}
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
            // component={Link}
            // to="/"
            >
              Kalamos Care
                </Typography>
            <IconButton
              // aria-label="account of current user"
              // aria-controls="menu-appbar"
              // aria-haspopup="true"
              onClick={handleAppBarMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleAppBarMenuClose}
            >
              <MenuItem onClick={handleAppBarMenuClose}>
                <a href="/clinic/settings">
                  Settings
                            </a>
              </MenuItem>
              <MenuItem onClick={handleAppBarMenuClose}>
                <a href="/logout">
                  Logout
                            </a>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </header>
        <main className={classes.main}>
          <Container>
            {/*<Switch>
              <Route path="/:id" children={<Child />} />
            </Switch>*/}
          </Container>
        </main>
        <footer className={classes.footer}>
          {/**<Footer />**/}
          <BottomNavigation
            className={classes.bottom_nav}
            value={value}
            onChange={handleBottomNavChange}
            showLabels
          >
            <BottomNavigationAction
              component={Link}
              //to="/notifications"
              //onClick={changeMainItem&URL}
              label="Notifications"
              value="notifications"
              icon={<Notifications />} />
            <BottomNavigationAction
              component={Link}
              //to="/Patients"
              //onClick={changeMainItem&URL}
              label="Patients"
              value="patients"
              icon={<Folder />} />
            <BottomNavigationAction
              component={Link}
              //to="Messages"
              //onClick={changeMainItem&URL}
              label="Messages"
              value="messages"
              icon={<Chat />} />
          </BottomNavigation>
        </footer>
    </Box>
  );
};