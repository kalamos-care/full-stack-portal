import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router';

import { MainRoutes } from './MainRoutes';

// Should I check for authentication here and route the user accordingly?
// import { isAuthenticated } from './utils/auth';


const App: FC = () => {
    return (
        <Router>
            <MainRoutes />
        </Router>
    );
};

export default App;