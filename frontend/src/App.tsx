import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MainRoutes } from './MainRoutes';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#67568c',
      main: '#463366',
      dark: '#301e4e',
    },
    secondary: {
      main: '#ff6e6c',
    },
  },
  typography: {
    fontFamily: [].join(','),
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
