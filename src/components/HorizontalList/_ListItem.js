import React from 'react';
import styled from 'styled-components';

const Item = styled.li`display: inline-block;`;

const ListItem = (props) => {
  const { children } = props;

  return (
    <Item>
      {children}
    </Item>
  );
};

export default ListItem;
