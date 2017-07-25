import React from 'react';
import styled from 'styled-components';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = () => {
  const AppContainer = styled.div`height: 100%;`;

  return (
    <MuiThemeProvider>
      <AppContainer>
        {/* Header */}
        <AppBar title="Buymart" />
        {/* Content */}
        <p>TODO</p>
      </AppContainer>
    </MuiThemeProvider>
  );
};

export default App;
