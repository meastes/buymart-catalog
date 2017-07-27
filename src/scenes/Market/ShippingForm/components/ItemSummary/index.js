import React from 'react';
import styled from 'styled-components';

import config from '../../../../../config';
import { formatDollars } from '../../../../../util/formatters';

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
          Price: {formatDollars(props.price)}
        </VerticalList.Item>
        <VerticalList.Item>
          Shipping & Handling: {props.shipping !== null ? formatDollars(props.shipping) : 'N/A'}
        </VerticalList.Item>
        <VerticalList.Item>
          <hr />
        </VerticalList.Item>
        <VerticalList.Item>
          Total: {formatDollars(props.total)}
        </VerticalList.Item>
      </VerticalList>
    </PriceContainer>
  </ItemContainer>);

export default ItemSummary;
