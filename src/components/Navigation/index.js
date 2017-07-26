import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import styledMaterial from '../../util/styledMaterial';

const NavigationBar = styledMaterial(Drawer)`
    & > div {
      top: 64px !important;
    }
  `;

const NavItem = styledMaterial(MenuItem, ['active'])`
  background-color: ${styleProps => (styleProps.active ? 'lightblue' : 'white')} !important;
`;

const Navigation = (props) => {
  const navItems = props.items.map(item =>
    (<NavItem key={item.title} active={item.active}>
      {item.title}
    </NavItem>),
  );
  return (
    <NavigationBar open={props.open}>
      {navItems}
    </NavigationBar>
  );
};

Navigation.defaultProps = {
  open: false,
  items: [],
};

export default Navigation;
