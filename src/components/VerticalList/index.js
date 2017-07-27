import React from 'react';
import styled from 'styled-components';

import _ListItem from './_ListItem';
import spacingConfig from '../../config/spacing';

const List = styled.ul`
  & > li + li {
    margin-top: ${props => props.spacing};
  }
`;

const VerticalList = (props) => {
  const { spacing, children } = props;

  return (
    <List spacing={spacing}>
      {children}
    </List>
  );
};

VerticalList.defaultProps = {
  spacing: spacingConfig.ONE,
};

VerticalList.SPACING = _ListItem;
VerticalList.Item = _ListItem;

export default VerticalList;
