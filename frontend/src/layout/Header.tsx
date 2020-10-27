import React, { FC } from 'react';
//import { Switch, Route } from 'react-router-dom';
//import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { logout, isAuthenticated } from '../utils/auth';

import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    link: {
        color: "white",
    },
    title: {
        flexGrow: 1,
        textAlign: "left",
    },
}));

const Header: FC = () => {
    const classes = useStyles();
    const loggedIn = isAuthenticated();

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
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
                {!loggedIn && (
                    <>
                        <Button color="inherit">
                            <a className={classes.link} href="/login">
                                Login
                            </a>
                        </Button>
                        <Button color="inherit">
                            <a className={classes.link} href="/signup">
                                Sign Up
                            </a>
                        </Button>
                    </>
                )}
                {loggedIn && (
                    <div>
                        <IconButton
                            // aria-label="account of current user"
                            // aria-controls="menu-appbar"
                            // aria-haspopup="true"
                            onClick={handleMenu}
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
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><a href="/settings">Settings</a></MenuItem>
                            <MenuItem onClick={handleClose}><a href="/logout">Logout</a></MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header