import React from 'react';
import styled from 'styled-components';

import config from '../../config';

import _ListItem from './_ListItem';

const List = styled.ul`
  & > li + li {
    margin-left: ${props => props.spacing};
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
  spacing: config.spacing.ONE,
};

HorizontalList.Item = _ListItem;

export default HorizontalList;
