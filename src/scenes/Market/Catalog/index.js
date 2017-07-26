import React from 'react';
import styled from 'styled-components';

import config from '../../../config';

import HorizontalList from '../../../components/HorizontalList';
import CatalogItem from './components/CatalogItem';

const PageContainer = styled.div`
  margin-top: ${config.spacing.THREE};
  margin-bottom: ${config.spacing.THREE};

  text-align: center;
`;

const products = [
  {
    name: 'Table',
    sku: '00185316',
    price: '$100.00',
    features: ['wooden', 'tall', 'sturdy'],
  },
  {
    name: 'Chair',
    sku: '00185317',
    price: '$50.00',
    features: ['wooden', 'black'],
  },
  {
    name: 'Rug',
    sku: '00185318',
    price: '$80.00',
    features: ['mosaic', 'large'],
  },
];

const productListItems = products.map(product =>
  (<HorizontalList.Item key={product.sku}>
    <CatalogItem name={product.name} price={product.price} features={product.features} />
  </HorizontalList.Item>),
);

export default () =>
  (<PageContainer>
    <HorizontalList spacing={config.spacing.TWO}>
      {productListItems}
    </HorizontalList>
  </PageContainer>);
