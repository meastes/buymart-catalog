import React, { Component } from 'react';
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

export default class ShippingInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usStateValue: '',
    };
  }

  onChange = (event, newText) => {
    this.setState({ usStateValue: newText });
    this.props.onUsStateChange(newText);
  };

  render() {
    const { usStateValue } = this.state;

    // TODO handle enter being pressed
    return (
      <Card>
        <CardText>
          <form>
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
                  <ShippingTextField hintText="State" short onChange={this.onChange} value={usStateValue} />
                </TextFieldList>
              </VerticalList.Item>
              <VerticalList.Item>
                <ShippingTextField hintText="Zip Code" />
              </VerticalList.Item>
              <VerticalList.Item>
                <ButtonWrapper>
                  <RaisedButton label="Confirm" primary onTouchTap={this.props.onFormSubmit} />
                </ButtonWrapper>
              </VerticalList.Item>
            </VerticalList>
          </form>
        </CardText>
      </Card>
    );
  }
}
