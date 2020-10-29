import React, { FC, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
      },
    title: {
        flexGrow: 1,
        textAlign: "left",
      },
}));


const Header: FC = () => {
    const classes = useStyles();

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
            <ButtonGroup color="inherit">
              <Button href="/login">
                Login
            </Button>
              <Button href="/signup">
                Sign Up
            </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
    );
};

export default Header;