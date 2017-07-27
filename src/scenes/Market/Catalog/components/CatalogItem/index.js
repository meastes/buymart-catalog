import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';

import spacingConfig from '../../../../../config/spacing';
import { formatDollars } from '../../../../../util/formatters';
import styledMaterial from '../../../../../util/styledMaterial';

import ItemContainer from '../../../../../components/ItemContainer';

const PriceContainer = styled.div`
  font-size: 14pt;
  margin-bottom: ${spacingConfig.TWO};
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

class CatalogItem extends Component {
  onBuyClick = () => {
    const { product, history } = this.props;
    history.push({ pathname: `/market/shipping/${product.sku}` });
  };

  render() {
    const { product } = this.props;

    return (
      <ItemContainer name={product.name}>
        <PriceContainer>
          {formatDollars(product.price)}
        </PriceContainer>
        <FeatureList>
          {product.features &&
            product.features.map(feature =>
              (<li key={feature}>
                {feature}
              </li>),
            )}
        </FeatureList>
        <BuyButton label="Buy" primary onTouchTap={this.onBuyClick} />
      </ItemContainer>
    );
  }
}

export default withRouter(CatalogItem);
