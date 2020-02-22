import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import StepByStep from './StepByStep';
import Profile from './Profile';
import SignUp from './SignUp';

import {Navbar} from './components';

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/signup" component={SignUp} />

        <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipe/:recipeId" component={StepByStep} />
            <Route path="/profile/:profileId" component={Profile} />
          </Switch>
        </>
      </Router>
    </>
  );
};

export default Routes;
