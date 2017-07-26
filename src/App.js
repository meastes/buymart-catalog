import React from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Navigation from './components/Navigation';

const App = () => {
  const AppContainer = styled.div`height: 100%;`;

  return (
    <MuiThemeProvider>
      <AppContainer>
        <Header />
        <Navigation />
        <p>TODO</p>
      </AppContainer>
    </MuiThemeProvider>
  );
};

export default App;
