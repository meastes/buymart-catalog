import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';

import config from '../../../../../config';
import styledMaterial from '../../../../../util/styledMaterial';

import ItemContainer from '../../../../../components/ItemContainer';

const PriceContainer = styled.div`
  font-size: 14pt;
  margin-bottom: ${config.spacing.TWO};
`;

const FeatureList = styled.ul`
  font-size: 16pt;
  text-align: left;
  list-style: disc inside none;
`;

const BuyButton = styledMaterial(RaisedButton)`
  position: absolute;
  left: 58px;
  bottom: 10px;
`;

const CatalogItem = (props) => {
  const { product, history } = props;

  const onBuyClick = () => history.push({ pathname: `/market/shipping/${product.sku}` });

  return (
    <ItemContainer name={props.name}>
      <PriceContainer>
        {product.price}
      </PriceContainer>
      <FeatureList>
        {product.features &&
          product.features.map(feature =>
            (<li key={feature}>
              {feature}
            </li>),
          )}
      </FeatureList>
      <BuyButton label="Buy" primary onTouchTap={onBuyClick} />
    </ItemContainer>
  );
};

export default withRouter(CatalogItem);
