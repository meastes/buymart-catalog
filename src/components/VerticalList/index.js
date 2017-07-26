import React from 'react';
import styled from 'styled-components';

import _ListItem from './_ListItem';
import config from '../../config';

const VerticalList = (props) => {
  const { spacing, children } = props;

  const List = styled.ul`
    & > li + li {
      margin-top: ${spacing};
    }
  `;

  return (
    <List>
      {children}
    </List>
  );
};

VerticalList.defaultProps = {
  spacing: config.spacing.ONE,
};

VerticalList.Item = _ListItem;

export default VerticalList;
