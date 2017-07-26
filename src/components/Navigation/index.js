import React from 'react';
import styled from 'styled-components';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Navigation = styled(Drawer)`
    & > div {
      top: 64px !important;
    }
  `;

const NavItem = styled(MenuItem)`
    background-color: ${styleProps => (styleProps.active ? 'lightblue' : 'white')} !important;
  `;

export default () =>
  (<Navigation open>
    <NavItem>Home</NavItem>
    <NavItem active>Market</NavItem>
    <NavItem>Help</NavItem>
  </Navigation>);
