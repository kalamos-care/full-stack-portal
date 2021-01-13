//this is just a copy of the footer for now

import React, { FC, useState } from 'react';
import { Link as RouterLink, useParams, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core/';
import { Chat, Folder, Notifications, LocalHospital } from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  bottom_nav: {
    width: '100%',
  },
}));

const sideNavs = [
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
    label: 'Lab Orders',
    value: 'orders',
    icon: <LocalHospital />,
    url: '/clinic/orders',
  },
];

const Sidebar: FC = () => {
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
      {sideNavs.map((bottomNav) => (
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

export default Sidebar;
