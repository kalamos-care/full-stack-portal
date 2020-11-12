import React, { FC, useState } from 'react';
import {
    BrowserRouter as Router,
    Link as RouterLink
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import {
    BottomNavigation, BottomNavigationAction, Typography, Box
} from '@material-ui/core/'
import {
    Chat, Folder, Notifications
} from '@material-ui/icons/';


const useStyles = makeStyles((theme) => ({
    bottom_nav: {
        width: '100%',
    },
}));


const Footer: FC = () => {
    const classes = useStyles();

  // Bottom Nav state management (I think)
  const [value, setValue] = React.useState('notifications');

  function handleBottomNavChange(event: React.ChangeEvent<{}>, newValue: string) {
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
            component={RouterLink}
            to="/clinic/notifications"
          />
          <BottomNavigationAction
            label="Patients"
            value="patients"
            icon={<Folder />}
            component={RouterLink}
            to="/clinic/patients"
          />
          <BottomNavigationAction
            label="Messages"
            value="messages"
            icon={<Chat />}
            component={RouterLink}
            to="/clinic/messages"
          />
      </BottomNavigation>
    );
};

export default Footer;