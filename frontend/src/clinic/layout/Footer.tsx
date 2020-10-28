import React, { FC, useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import {
    Link, BottomNavigation, BottomNavigationAction, Typography, Box
} from '@material-ui/core/'
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
            onChange={handleChange}
            showLabels
        >
            <BottomNavigationAction
                component={Link}
                label="Notifications"
                value="notifications"
                icon={<Notifications />} />
            <BottomNavigationAction
                component={Link}
                label="Patients"
                value="patients"
                icon={<Folder />} />
            <BottomNavigationAction
                component={Link}
                label="Messages"
                value="messages"
                icon={<Chat />} />

        </BottomNavigation>
    );
};

export default Footer