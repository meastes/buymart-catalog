import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import styledMaterial from '../../util/styledMaterial';

const NavItem = styledMaterial(MenuItem, ['active'])`
  background-color: ${styleProps => (styleProps.active ? 'lightblue' : 'white')} !important;
`;

const Navigation = (props) => {
  // TODO add hrefs
  const navItems = props.items.map(item =>
    (<NavItem key={item.title} active={item.active}>
      {item.title}
    </NavItem>),
  );
  return (
    <Drawer docked={false} open={props.open} onRequestChange={props.onRequestClose}>
      {navItems}
    </Drawer>
  );
};

Navigation.defaultProps = {
  open: false,
  items: [],
};

export default Navigation;
