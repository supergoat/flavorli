import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Home from './Home';
import StepByStep from './StepByStep';
import Profile from './Profile';
import {Navbar} from './components';

const Routes = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipe/:recipeId" component={StepByStep} />
          <Route path="/profile/:profileId" component={Profile} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
