import React from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Navigation from './components/Navigation';

import Catalog from './scenes/Market/Catalog';
import ShippingForm from './scenes/Market/ShippingForm';
import ThankYou from './scenes/Market/ThankYou';

const App = () => {
  const AppContainer = styled.div`height: 100%;`;

  const navigationItems = [{ title: 'Home' }, { title: 'Market', active: true }, { title: 'Help' }];

  return (
    <MuiThemeProvider>
      <AppContainer>
        <Header />
        <Navigation items={navigationItems} open />
        {/* Hardcode both scenes until routing is implemented */}
        <Catalog />
        <ShippingForm />
        <ThankYou />
      </AppContainer>
    </MuiThemeProvider>
  );
};

export default App;
