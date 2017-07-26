import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import styledMaterial from '../../util/styledMaterial';

const ItemCard = styledMaterial(Card)`
  display: inline-block;
  width: 200px;
`;

export default props =>
  (<ItemCard>
    <CardTitle title={props.name} />
    <CardText>
      {props.children}
    </CardText>
  </ItemCard>);
