import React from 'react';
import styled from 'styled-components';

import spacingConfig from '../../config/spacing';

import _ListItem from './_ListItem';

const List = styled.ul`
  & > li {
    margin-right: ${props => props.spacing};
  }
`;

const HorizontalList = (props) => {
  const { spacing, children } = props;

  return (
    <List spacing={spacing}>
      {children}
    </List>
  );
};

HorizontalList.defaultProps = {
  spacing: spacingConfig.ONE,
};

HorizontalList.SPACING = spacingConfig;
HorizontalList.Item = _ListItem;

export default HorizontalList;
