import React, { FC } from 'react';
import { Routes } from './Routes';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link';

import { isAuthenticated } from './utils/auth';

import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer'

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
    body: {
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
}));

const App: FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.app}>
            <header className={classes.header}>
                <Header />
            </header>
            <body className={classes.body}>
                <Body />
            </body>
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </Box>
    );
};

export default App;