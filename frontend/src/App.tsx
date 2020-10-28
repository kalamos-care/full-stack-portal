import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';

import { Routes } from './Routes';

// Should I check for authentication here and route the user accordingly?
// import { isAuthenticated } from './utils/auth';


const App: FC = () => {
    {/**
        If logged in - see the clinic view
        If not logged in - see the marketing view
        Must manually navigate to admin to login
    **/}

    return (
        <Routes />
    );
};

export default App;