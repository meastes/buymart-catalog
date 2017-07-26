import React from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Navigation from './components/Navigation';

import Catalog from './scenes/Market/Catalog';

const App = () => {
  const AppContainer = styled.div`height: 100%;`;

  return (
    <MuiThemeProvider>
      <AppContainer>
        <Header />
        <Navigation open={false} />
        {/* Hardcode Catalog until routing is implemented */}
        <Catalog />
      </AppContainer>
    </MuiThemeProvider>
  );
};

export default App;
