import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Recipe from './Recipe';
import StepByStep from './StepByStep';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Recipe />
        </Route>
      </Switch>
      <Route path="/step-by-step">
        <StepByStep />
      </Route>
    </Router>
  );
};

export default Routes;
