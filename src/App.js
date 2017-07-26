import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './config/Routes';

import Header from './components/Header';
import Navigation from './components/Navigation';

const NAVIGATION_ITEMS = [{ title: 'Home' }, { title: 'Market', active: true }, { title: 'Help' }];

// TODO move to API call
const products = [
  {
    name: 'Table',
    sku: '00185316',
    price: 100,
    features: ['wooden', 'tall', 'sturdy'],
  },
  {
    name: 'Chair',
    sku: '00185317',
    price: 50,
    features: ['wooden', 'black'],
  },
  {
    name: 'Rug',
    sku: '00185318',
    price: 80,
    features: ['mosaic', 'large'],
  },
];

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
        <Router>
          <AppContainer>
            <Header onRequestOpen={this.openNavigation} />
            <Navigation items={NAVIGATION_ITEMS} open={this.state.navigationOpen} onRequestClose={this.closeNavigation} />
            <Routes products={products} />
          </AppContainer>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
