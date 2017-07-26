import React from 'react';
import styled from 'styled-components';

import config from '../../config';

import _ListItem from './_ListItem';

const HorizontalList = (props) => {
  const { spacing, children } = props;

  const List = styled.ul`
    & > li + li {
      margin-left: ${spacing};
    }
  `;

  return (
    <List>
      {children}
    </List>
  );
};

HorizontalList.defaultProps = {
  spacing: config.spacing.ONE,
};

HorizontalList.Item = _ListItem;

export default HorizontalList;
