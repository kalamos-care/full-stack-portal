import React, { FC, useState } from 'react';
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
    BottomNavigation, BottomNavigationAction, Typography, Box
} from '@material-ui/core/'
// import Link from '@material-ui/core'
import {
    Chat, Folder, Notifications
} from '@material-ui/icons/';


const useStyles = makeStyles((theme) => ({
    bottom_nav: {
        width: '100%',
    },
    copyright: {
        alignItems: 'center',
    }
}));


  // Bottom Nav state management (I think)
  const [value, setValue] = React.useState('notifications');

  function handleBottomNavChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }


const Footer: FC = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState('notifications');

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <BottomNavigation
        className={classes.bottom_nav}
        value={value}
        onChange={handleBottomNavChange}
        showLabels
        >
          <BottomNavigationAction
            label="Notifications"
            value="notifications"
            icon={<Notifications />}
            component={Link}
            to="/clinic/notificatoins"
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
    );
};

export default Footer;