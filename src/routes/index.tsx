import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokemon from '../pages/Pokemon';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Pokemon} />
  </Switch>
);

export default Routes;
