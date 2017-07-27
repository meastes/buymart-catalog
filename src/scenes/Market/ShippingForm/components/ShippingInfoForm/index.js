import React, { Component } from 'react';
import styled from 'styled-components';
import _values from 'lodash/values';

import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styledMaterial from '../../../../../util/styledMaterial';

import VerticalList from '../../../../../components/VerticalList';

const FIELD = {
  NAME: 'name',
  STREET: 'street',
  CITY: 'city',
  US_STATE: 'usState',
  ZIP_CODE: 'zipCode',
};

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
  display: flex;

  & > * + * {
    margin-left: 10px;
  }
`;

const ButtonWrapper = styled.div`text-align: right;`;

export default class ShippingInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Form values
      name: '',
      street: '',
      city: '',
      usState: '',
      zipCode: '',

      // Validation errors
      nameError: null,
      streetError: null,
      cityError: null,
      usStateError: null,
      zipCodeError: null,
    };
  }

  onFieldChange = formField => (event, newValue) => {
    this.setState({ [formField]: newValue });
    if (formField === FIELD.US_STATE) {
      this.props.onUsStateChange(newValue);
    }
  };

  onFieldBlur = formField => () => {
    const error = this.validateField(formField);
    this.setState({ [`${formField}Error`]: error });
  };

  onFormSubmit = () => {
    const newState = {};
    _values(FIELD).forEach((field) => {
      newState[`${field}Error`] = this.validateField(field);
    });

    this.setState(newState, () => {
      if (this.isFormValid()) {
        this.props.onFormSubmit();
      }
    });
  };

  validateField(formField) {
    let error = null;
    if (!this.state[formField]) {
      error = 'This field is required.';
    } else if (formField === 'usState' && !this.props.usStates.includes(this.state.usState.toUpperCase())) {
      error = 'Please enter a valid US state.';
    }
    return error;
  }

  isFormValid() {
    return (
      !this.state.nameError && !this.state.streetError && !this.state.cityError && !this.state.usStateError && !this.state.zipCodeError
    );
  }

  render() {
    const { name, street, city, usState, zipCode } = this.state;
    return (
      <Card>
        <CardText>
          <form
            ref={(el) => {
              this.form = el;
            }}
          >
            <VerticalList>
              <VerticalList.Item>
                <ShippingTextField
                  hintText="Name"
                  onChange={this.onFieldChange(FIELD.NAME)}
                  onBlur={this.onFieldBlur(FIELD.NAME)}
                  value={name}
                  errorText={this.state.nameError}
                />
              </VerticalList.Item>
              <VerticalList.Item>
                <ShippingTextField
                  hintText="Street"
                  onChange={this.onFieldChange(FIELD.STREET)}
                  onBlur={this.onFieldBlur(FIELD.STREET)}
                  value={street}
                  errorText={this.state.streetError}
                />
              </VerticalList.Item>
              <VerticalList.Item>
                <TextFieldList>
                  <ShippingTextField
                    hintText="City"
                    long
                    onChange={this.onFieldChange(FIELD.CITY)}
                    onBlur={this.onFieldBlur(FIELD.CITY)}
                    value={city}
                    errorText={this.state.cityError}
                  />
                  <ShippingTextField
                    hintText="State"
                    short
                    onChange={this.onFieldChange(FIELD.US_STATE)}
                    onBlur={this.onFieldBlur(FIELD.US_STATE)}
                    value={usState}
                    errorText={this.state.usStateError}
                  />
                </TextFieldList>
              </VerticalList.Item>
              <VerticalList.Item>
                <ShippingTextField
                  hintText="Zip Code"
                  onChange={this.onFieldChange(FIELD.ZIP_CODE)}
                  onBlur={this.onFieldBlur(FIELD.ZIP_CODE)}
                  value={zipCode}
                  errorText={this.state.zipCodeError}
                />
              </VerticalList.Item>
              <VerticalList.Item>
                <ButtonWrapper>
                  <RaisedButton label="Confirm" primary onTouchTap={this.onFormSubmit} />
                </ButtonWrapper>
              </VerticalList.Item>
            </VerticalList>
          </form>
        </CardText>
      </Card>
    );
  }
}
