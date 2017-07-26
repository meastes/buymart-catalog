import React from 'react';
import styled from 'styled-components';

import config from '../../../config';

import HorizontalList from '../../../components/HorizontalList';
import ItemSummary from './components/ItemSummary';

const product = {
  name: 'Table',
  price: '$100.00',
  shipping: '$5.00',
  total: '$105.00',
};

export default () => {
  const PageContainer = styled.div`
    margin-top: ${config.spacing.THREE};
    margin-bottom: ${config.spacing.THREE};
  `;

  const SummaryFormContainer = styled.div`
    margin-top: ${config.spacing.TWO};
    margin-bottom: ${config.spacing.TWO};

    & > ul {
      display: flex;
      justify-content: center;
    }
  `;

  return (
    <PageContainer>
      <SummaryFormContainer>
        <HorizontalList spacing={config.spacing.TWO}>
          <HorizontalList.Item>
            <ItemSummary name={product.name} price={product.price} shipping={product.shipping} total={product.total} />
          </HorizontalList.Item>
        </HorizontalList>
      </SummaryFormContainer>
    </PageContainer>
  );
};
