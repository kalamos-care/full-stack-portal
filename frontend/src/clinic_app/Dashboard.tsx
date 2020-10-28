import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';


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
      copyright: {
        alignItems: 'center',
        width: '100%',
      },
      title: {
        flexGrow: 1,
        textAlign: "left",
      },
}));

export const Dashboard: FC = ( { children } ) => {
    const classes = useStyles();
    
    return (
        <Box className={classes.app}>
            <header className={classes.header}>
                <Header />
            </header>
            <main className={classes.main}>
                <Main>
                    { children }
                </Main>
            </main>
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </Box>
    );
};

// export default Protected