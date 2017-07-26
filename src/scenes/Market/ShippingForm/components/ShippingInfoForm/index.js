import React from 'react';
import styled from 'styled-components';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styledMaterial from '../../../../../util/styledMaterial';

import VerticalList from '../../../../../components/VerticalList';

const ShippingTextField = styledMaterial(TextField, ['long', 'short'])`
  width: ${(styleProps) => {
    if (styleProps.long) {
      return '190px !important';
    } else if (styleProps.short) {
      return '100px !important';
    }
    return '300px !important';
  }};
`;

const TextFieldList = styled.div`
  & > * + * {
    margin-left: 10px;
  }
`;

const ButtonWrapper = styled.div`text-align: right;`;

export default () =>
  (<Card>
    <CardText>
      <VerticalList>
        <VerticalList.Item>
          <ShippingTextField hintText="Name" />
        </VerticalList.Item>
        <VerticalList.Item>
          <ShippingTextField hintText="Street" />
        </VerticalList.Item>
        <VerticalList.Item>
          <TextFieldList>
            <ShippingTextField hintText="City" long />
            <ShippingTextField hintText="State" short />
          </TextFieldList>
        </VerticalList.Item>
        <VerticalList.Item>
          <ShippingTextField hintText="Zip Code" />
        </VerticalList.Item>
        <VerticalList.Item>
          <ButtonWrapper>
            <RaisedButton label="Confirm" primary />
          </ButtonWrapper>
        </VerticalList.Item>
      </VerticalList>
    </CardText>
  </Card>);
