import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import styledMaterial from '../../util/styledMaterial';

const Navigation = styledMaterial(Drawer)`
    & > div {
      top: 64px !important;
    }
  `;

const NavItem = styledMaterial(MenuItem, ['active'])`
  background-color: ${styleProps => (styleProps.active ? 'lightblue' : 'white')} !important;
`;

export default props =>
  (<Navigation open={props.open}>
    <NavItem>Home</NavItem>
    <NavItem active>Market</NavItem>
    <NavItem>Help</NavItem>
  </Navigation>);
