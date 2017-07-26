import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import config from '../../../config';

import HorizontalList from '../../../components/HorizontalList';
import ItemSummary from './components/ItemSummary';
import ShippingInfoForm from './components/ShippingInfoForm';

// TODO retrieve from API
const usStates = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
    shipping: 3.99,
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
    shipping: 5.99,
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    shipping: 5.99,
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
    shipping: 5.99,
  },
  {
    name: 'California',
    abbreviation: 'CA',
    shipping: 7.5,
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
    shipping: 5.99,
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
    shipping: 5.99,
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
    shipping: 5.99,
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
    shipping: 5.99,
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
    shipping: 3.99,
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
    shipping: 3.99,
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
    shipping: 5.99,
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
    shipping: 5.99,
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
    shipping: 5.99,
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
    shipping: 5.99,
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
    shipping: 5.99,
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
    shipping: 5.99,
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
    shipping: 5.99,
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
    shipping: 5.99,
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
    shipping: 5.99,
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
    shipping: 5.99,
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    shipping: 7.5,
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
    shipping: 5.99,
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
    shipping: 0,
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
    shipping: 5.99,
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
    shipping: 5.99,
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
    shipping: 5.99,
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
    shipping: 5.99,
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
    shipping: 5.99,
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
    shipping: 5.99,
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
    shipping: 5.99,
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
    shipping: 5.99,
  },
  {
    name: 'New York',
    abbreviation: 'NY',
    shipping: 7.5,
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
    shipping: 5.99,
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
    shipping: 5.99,
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
    shipping: 5.99,
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
    shipping: 5.99,
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
    shipping: 5.99,
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    shipping: 5.99,
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
    shipping: 5.99,
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
    shipping: 5.99,
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
    shipping: 5.99,
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
    shipping: 5.99,
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
    shipping: 5.99,
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
    shipping: 5.99,
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
    shipping: 5.99,
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
    shipping: 5.99,
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
    shipping: 5.99,
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
    shipping: 5.99,
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
    shipping: 5.99,
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
    shipping: 5.99,
  },
];

const PageContainer = styled.div`
  margin-top: ${config.spacing.THREE};
  margin-bottom: ${config.spacing.THREE};
`;

const SummaryFormContainer = styled.div`
  margin-top: ${config.spacing.TWO};
  margin-bottom: ${config.spacing.TWO};

  & > ul {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
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
    };
  }

  onUsStateChange = (selectedUsState) => {
    this.setState({ selectedUsState });
  };

  onFormSubmit = () => {
    this.props.history.push({ pathname: '/market/thanks' });
  };

  render() {
    const { product } = this;

    let shipping = null;
    if (this.state.selectedUsState) {
      const selectedUsState = this.state.selectedUsState.toUpperCase();
      const selectedStateData = usStates.find(usState => usState.abbreviation === selectedUsState);
      if (selectedStateData) {
        shipping = selectedStateData.shipping;
      }
    }

    const total = product.price + shipping;

    // TODO Fix responsive - card displays weird when stacked
    return (
      <PageContainer>
        <SummaryFormContainer>
          <HorizontalList spacing={config.spacing.TWO}>
            <HorizontalList.Item>
              <ItemSummary name={product.name} price={product.price} shipping={shipping} total={total} />
            </HorizontalList.Item>
            <HorizontalList.Item>
              <ShippingInfoForm onUsStateChange={this.onUsStateChange} onFormSubmit={this.onFormSubmit} />
            </HorizontalList.Item>
          </HorizontalList>
        </SummaryFormContainer>
      </PageContainer>
    );
  }
}

export default withRouter(ShippingForm);
