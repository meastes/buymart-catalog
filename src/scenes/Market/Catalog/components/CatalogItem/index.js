import React from 'react';
import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';

import config from '../../../../../config';
import styledMaterial from '../../../../../util/styledMaterial';

import ItemContainer from '../../../../../components/ItemContainer';

const PriceContainer = styled.div`
  font-size: 14pt;
  margin-bottom: ${config.spacing.ONE};
`;

const FeatureList = styled.ul`
  font-size: 16pt;
  text-align: left;
  list-style: disc inside none;
`;

const BuyButton = styledMaterial(RaisedButton)`
  position: absolute;
  left: 55px;
  bottom: 10px;
`;

const CatalogItem = props =>
  (<ItemContainer name={props.name}>
    <PriceContainer>
      {props.price}
    </PriceContainer>
    <FeatureList>
      {props.features &&
        props.features.map(feature =>
          (<li key={feature}>
            {feature}
          </li>),
        )}
    </FeatureList>
    <BuyButton label="Buy" primary />
  </ItemContainer>);

export default CatalogItem;
