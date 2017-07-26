import React from 'react';
import styled from 'styled-components';

const ListItem = (props) => {
  const { children } = props;

  const Item = styled.li`display: block;`;

  return (
    <Item>
      {children}
    </Item>
  );
};

export default ListItem;