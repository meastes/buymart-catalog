import React from 'react';
import styled from 'styled-components';

import spacingConfig from '../../../config/spacing';

import HorizontalList from '../../../components/HorizontalList';
import CatalogItem from './components/CatalogItem';

const PageContainer = styled.div`
  margin-top: ${spacingConfig.THREE};
  margin-bottom: ${spacingConfig.THREE};

  text-align: center;
`;

const ProductsContainer = styled.div`
  margin-top: ${spacingConfig.TWO};
  margin-bottom: ${spacingConfig.TWO};

  & > ul {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;

    & > li {
      padding: ${spacingConfig.TWO};
    }
  }
`;

const ItemWrapper = styled.div`
  height: 100%;
  padding-bottom: ${spacingConfig.THREE};

  & > * {
    position: relative;
    height: 100%;
  }
`;

export default (props) => {
  const productListItems = props.products.map(product =>
    (<HorizontalList.Item key={product.sku}>
      <ItemWrapper>
        <CatalogItem product={product} />
      </ItemWrapper>
    </HorizontalList.Item>),
  );

  return (
    <PageContainer>
      <ProductsContainer>
        <HorizontalList spacing={HorizontalList.SPACING.TWO}>
          {productListItems}
        </HorizontalList>
      </ProductsContainer>
      <p>All products come with a 30-day money back guarantee</p>
    </PageContainer>
  );
};
