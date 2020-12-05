import React, { FC, useState } from 'react';
import { Link as RouterLink, useParams, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core/';
import { Chat, Folder, Notifications } from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  bottom_nav: {
    width: '100%',
  },
}));

const bottomNavs = [
  {
    label: 'Notifications',
    value: 'notifications',
    icon: <Notifications />,
    url: '/clinic/notifications',
  },
  {
    label: 'Patients',
    value: 'patients',
    icon: <Folder />,
    url: '/clinic/patients',
  },
  {
    label: 'Messages',
    value: 'messages',
    icon: <Chat />,
    url: '/clinic/messages',
  },
];

const Footer: FC = () => {
  const classes = useStyles();

  // Bottom Nav state management
  // Update based on URL parameters
  const [value, setValue] = React.useState('notifications');

  function handleBottomNavChange(
    event: React.ChangeEvent<{}>,
    newValue: string
  ) {
    setValue(newValue);
  }

  return (
    <BottomNavigation
      className={classes.bottom_nav}
      value={value}
      onChange={handleBottomNavChange}
      showLabels
    >
      {bottomNavs.map((bottomNav) => (
        <BottomNavigationAction
          key={bottomNav.value}
          label={bottomNav.label}
          value={bottomNav.value}
          icon={bottomNav.icon}
          component={NavLink}
          to={bottomNav.url}
        />
      ))}
    </BottomNavigation>
  );
};

export default Footer;
