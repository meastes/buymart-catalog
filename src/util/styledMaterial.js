import React from 'react';
import styled from 'styled-components';
import _omit from 'lodash/omit';

export default (WrappedComponent, swallowProps = []) => {
  const Wrapper = ({ children, ...props }) => {
    const filteredProps = _omit(props, swallowProps);
    return (
      <WrappedComponent {...filteredProps}>
        {children}
      </WrappedComponent>
    );
  };
  return styled(Wrapper);
};
