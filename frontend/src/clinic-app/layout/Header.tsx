import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Header: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [auth, setAuth] = React.useState(true);

  const [state, setState] = React.useState({
    top: false,
  });

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
          variant="h5"
          className={classes.title}
          component={RouterLink}
          to="/clinic"
        >
          Kalamos Care
        </Typography>
        <IconButton
          // aria-label="account of current user"
          // aria-controls="menu-appbar"
          // aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <MoreVertIcon />
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
          <MenuItem
            onClick={handleClose}
            component={RouterLink}
            to="/clinic/settings"
          >
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose} component={RouterLink} to="/logout">
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
