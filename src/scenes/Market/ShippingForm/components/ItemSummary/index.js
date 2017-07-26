import React from 'react';
import styled from 'styled-components';

import config from '../../../../../config';

import ItemContainer from '../../../../../components/ItemContainer';
import VerticalList from '../../../../../components/VerticalList';

const PriceContainer = styled.div`
  font-size: 14pt;
  margin-bottom: ${config.spacing.ONE};
`;

const ItemSummary = props =>
  (<ItemContainer name={props.name}>
    <PriceContainer>
      <VerticalList>
        <VerticalList.Item>
          Price: {props.price}
        </VerticalList.Item>
        <VerticalList.Item>
          Shipping & Handling: {props.shipping}
        </VerticalList.Item>
        <VerticalList.Item>
          <hr />
        </VerticalList.Item>
        <VerticalList.Item>
          Total: {props.total}
        </VerticalList.Item>
      </VerticalList>
    </PriceContainer>
  </ItemContainer>);

export default ItemSummary;
