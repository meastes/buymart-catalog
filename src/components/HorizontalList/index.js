import React from 'react';
import styled from 'styled-components';

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
  spacing: '12px',
};

HorizontalList.Item = _ListItem;

export default HorizontalList;
