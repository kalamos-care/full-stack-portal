import React, { FC } from 'react';
import { Routes } from './Routes';
import { makeStyles } from '@material-ui/core/styles';

// Should I check for authentication here and route the user accordingly?
// import { isAuthenticated } from './utils/auth';

const useStyles = makeStyles((theme) => ({
    /**
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
    **/
}));

const App: FC = () => {
    const classes = useStyles();

    {/** {/** 
        If logged in - see the clinic view
        If not logged in - see the marketing view
        Must manually navigate to admin to login
    **/}

    return (
        <Routes />
        /** 
        <Box className={classes.app}>
            <header className={classes.header}>
                <Header />
            </header>
            <main className={classes.main}>
                <Main />
            </main>
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </Box>
        **/
    );
};

export default App;