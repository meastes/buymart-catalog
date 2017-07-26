import React, { Component } from 'react';
import styled from 'styled-components';

import config from '../../../config';

import HorizontalList from '../../../components/HorizontalList';
import ItemSummary from './components/ItemSummary';
import ShippingInfoForm from './components/ShippingInfoForm';

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

export default class ShippingForm extends Component {
  constructor(props) {
    super(props);

    const { match, products } = props;
    const { sku } = match.params;

    this.product = products.find(product => product.sku === sku);
  }
  render() {
    const { product } = this;

    return (
      <PageContainer>
        <SummaryFormContainer>
          <HorizontalList spacing={config.spacing.TWO}>
            <HorizontalList.Item>
              <ItemSummary name={product.name} price={product.price} shipping={12} total={product.price + 12} />
            </HorizontalList.Item>
            <HorizontalList.Item>
              <ShippingInfoForm />
            </HorizontalList.Item>
          </HorizontalList>
        </SummaryFormContainer>
      </PageContainer>
    );
  }
}
