import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Recipe from './Recipe';
import StepByStep from './StepByStep';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipe/:recipeId" component={Recipe} />
      </Switch>
      <Route path="/step-by-step/:recipeId" component={StepByStep} />
    </Router>
  );
};

export default Routes;
