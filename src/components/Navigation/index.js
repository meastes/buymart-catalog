import React from 'react';
import { withRouter } from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import styledMaterial from '../../util/styledMaterial';

const NavItem = styledMaterial(MenuItem, ['active', 'highlightColor'])`
  background-color: ${styleProps => (styleProps.active ? styleProps.highlightColor : 'white')} !important;
`;

const Navigation = (props) => {
  const onNavItemClick = item => () => {
    if (item.href) {
      props.history.push({ pathname: item.href });
      props.onRequestClose();
    }
  };
  const navItems = props.items.map(item =>
    (<NavItem key={item.title} active={item.active} highlightColor={props.muiTheme.palette.primary3Color} onTouchTap={onNavItemClick(item)}>
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

export default muiThemeable()(withRouter(Navigation));
