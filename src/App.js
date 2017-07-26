import React, { Component } from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Navigation from './components/Navigation';

import Catalog from './scenes/Market/Catalog';
import ShippingForm from './scenes/Market/ShippingForm';
import ThankYou from './scenes/Market/ThankYou';

const NAVIGATION_ITEMS = [{ title: 'Home' }, { title: 'Market', active: true }, { title: 'Help' }];

class App extends Component {
  constructor() {
    super();
    this.state = {
      navigationOpen: false,
    };
  }

  openNavigation = () => {
    this.setState({ navigationOpen: true });
  };

  closeNavigation = () => {
    this.setState({ navigationOpen: false });
  };

  render() {
    const AppContainer = styled.div`height: 100%;`;

    return (
      <MuiThemeProvider>
        <AppContainer>
          <Header onRequestOpen={this.openNavigation} />
          <Navigation items={NAVIGATION_ITEMS} open={this.state.navigationOpen} onRequestClose={this.closeNavigation} />
          {/* Hardcode both scenes until routing is implemented */}
          <Catalog />
          <ShippingForm />
          <ThankYou />
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}

export default App;
