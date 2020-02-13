import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import StepByStep from './StepByStep';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipe/:recipeId" component={StepByStep} />
      </Switch>
    </Router>
  );
};

export default Routes;
