import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './config/Routes';
import navigationConfig from './config/navigation';
import { getAllProducts } from './services/api/products';

import Header from './components/Header';
import Navigation from './components/Navigation';

const AppContainer = styled.div`height: 100%;`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      navigationOpen: false,
      products: [],
    };
  }

  async componentWillMount() {
    const products = await getAllProducts();
    this.setState({ products });
  }

  openNavigation = () => {
    this.setState({ navigationOpen: true });
  };

  closeNavigation = () => {
    this.setState({ navigationOpen: false });
  };

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <AppContainer>
            <Header onRequestOpen={this.openNavigation} />
            <Navigation items={navigationConfig} open={this.state.navigationOpen} onRequestClose={this.closeNavigation} />
            <Routes products={this.state.products} />
          </AppContainer>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
