import React from 'react';
import styled from 'styled-components';

import spacingConfig from '../../../config/spacing';

const PageContainer = styled.div`
  margin-top: ${spacingConfig.TWO};
  text-align: center;
  font-size: 18pt;
`;

export default () => <PageContainer>Your purchase was successful. Thank you for your business.</PageContainer>;
