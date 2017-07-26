import React from 'react';
import styled from 'styled-components';

import config from '../../../config';

import HorizontalList from '../../../components/HorizontalList';
import CatalogItem from './components/CatalogItem';

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

const PageContainer = styled.div`
  margin-top: ${config.spacing.THREE};
  margin-bottom: ${config.spacing.THREE};

  text-align: center;
`;

const ProductsContainer = styled.div`
  margin-top: ${config.spacing.TWO};
  margin-bottom: ${config.spacing.TWO};

  & > ul {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ItemWrapper = styled.div`
  height: 100%;
  padding-bottom: ${config.spacing.THREE};

  & > * {
    position: relative;
    height: 100%;
  }
`;

// TODO Fix responsive - card displays weird when stacked
const productListItems = products.map(product =>
  (<HorizontalList.Item key={product.sku}>
    <ItemWrapper>
      <CatalogItem name={product.name} price={product.price} features={product.features} />
    </ItemWrapper>
  </HorizontalList.Item>),
);

export default () =>
  (<PageContainer>
    <ProductsContainer>
      <HorizontalList spacing={config.spacing.TWO}>
        {productListItems}
      </HorizontalList>
    </ProductsContainer>
    <p>All products come with a 30-day money back guarantee</p>
  </PageContainer>);
