import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Catalog from '../scenes/Market/Catalog';
import ShippingForm from '../scenes/Market/ShippingForm';
import ThankYou from '../scenes/Market/ThankYou';

export default (props) => {
  const ProductRoute = ({ component: Component, ...rest }) =>
    <Route {...rest} render={componentProps => <Component products={props.products} {...componentProps} />} />;

  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/market/catalog" />} />
      <Route exact path="/market" render={() => <Redirect to="/market/catalog" />} />
      <ProductRoute path="/market/catalog" component={Catalog} />
      <ProductRoute path="/market/shipping/:sku" component={ShippingForm} />
      <Route path="/market/thanks" component={ThankYou} />
    </div>
  );
};
