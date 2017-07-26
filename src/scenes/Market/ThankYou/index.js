import React from 'react';
import styled from 'styled-components';

import config from '../../../config';

const PageContainer = styled.div`
  margin-top: ${config.spacing.TWO};
  text-align: center;
  font-size: 18pt;
`;

export default () => <PageContainer>Your purchase was successful. Thank you for your business.</PageContainer>;
