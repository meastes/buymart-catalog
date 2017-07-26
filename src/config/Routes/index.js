import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Catalog from '../../scenes/Market/Catalog';
import ShippingForm from '../../scenes/Market/ShippingForm';
import ThankYou from '../../scenes/Market/ThankYou';

const ProductRoute = ({ component: Component, products, ...rest }) =>
  <Route {...rest} render={props => <Component products={products} {...props} />} />;

export default props =>
  (<div>
    <Route exact path="/" render={() => <Redirect to="/market/catalog" />} />
    <Route exact path="/market" render={() => <Redirect to="/market/catalog" />} />
    <ProductRoute path="/market/catalog" component={Catalog} products={props.products} />
    <Route path="/market/shipping/:id" component={ShippingForm} />
    <Route path="/market/thanks" component={ThankYou} />
  </div>);
