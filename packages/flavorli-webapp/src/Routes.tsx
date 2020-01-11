import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Recipe from './Recipe';
import StepByStep from './StepByStep';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/:recipeId">
          <Recipe />
        </Route>
      </Switch>
      <Route path="/step-by-step/:recipeId">
        <StepByStep />
      </Route>
    </Router>
  );
};

export default Routes;
