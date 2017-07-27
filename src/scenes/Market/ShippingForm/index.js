import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import spacingConfig from '../../../config/spacing';
import { getAllUsStates } from '../../../services/api/usStates';

import HorizontalList from '../../../components/HorizontalList';
import ItemSummary from './components/ItemSummary';
import ShippingInfoForm from './components/ShippingInfoForm';

const PageContainer = styled.div`
  margin-top: ${spacingConfig.TWO};
  margin-bottom: ${spacingConfig.TWO};
`;

const SummaryFormContainer = styled.div`
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

class ShippingForm extends Component {
  constructor(props) {
    super(props);

    const { match, products } = props;
    const { sku } = match.params;

    this.product = products.find(product => product.sku === sku);

    this.state = {
      selectedUsState: null,
      usStates: [],
      usStateAbbreviations: [],
    };
  }

  async componentWillMount() {
    const usStates = await getAllUsStates();
    const usStateAbbreviations = usStates.map(stateData => stateData.abbreviation);
    this.setState({ usStates, usStateAbbreviations });
  }

  onUsStateChange = (selectedUsState) => {
    this.setState({ selectedUsState });
  };

  onFormSubmit = () => {
    // Normally we would save the form data to the server here
    this.props.history.push({ pathname: '/market/thanks' });
  };

  render() {
    const { product } = this;

    let shipping = null;
    if (this.state.selectedUsState) {
      const selectedUsState = this.state.selectedUsState.toUpperCase();
      const selectedStateData = this.state.usStates.find(usState => usState.abbreviation === selectedUsState);
      if (selectedStateData) {
        shipping = selectedStateData.shipping;
      }
    }

    // TODO Fix responsive - card displays weird when stacked
    return (
      <PageContainer>
        <SummaryFormContainer>
          <HorizontalList spacing={HorizontalList.SPACING.TWO}>
            <HorizontalList.Item>
              {product && <ItemSummary name={product.name} price={product.price} shipping={shipping} total={product.price + shipping} />}
            </HorizontalList.Item>
            <HorizontalList.Item>
              <ShippingInfoForm
                usStates={this.state.usStateAbbreviations}
                onUsStateChange={this.onUsStateChange}
                onFormSubmit={this.onFormSubmit}
              />
            </HorizontalList.Item>
          </HorizontalList>
        </SummaryFormContainer>
      </PageContainer>
    );
  }
}

export default withRouter(ShippingForm);
