import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Catalog from '../../scenes/Market/Catalog';
import ShippingForm from '../../scenes/Market/ShippingForm';
import ThankYou from '../../scenes/Market/ThankYou';

export default () =>
  (<div>
    <Route exact path="/" render={() => <Redirect to="/market/catalog" />} />
    <Route path="/market/catalog" component={Catalog} />
    <Route path="/market/shipping" component={ShippingForm} />
    <Route path="/market/thanks" component={ThankYou} />
  </div>);
