import React from 'react';
import mixpanel from 'mixpanel-browser';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './Home';
import StepByStep from './StepByStep';
import Profile from './Profile';
import Authentication from './Authentication';
import {useAuthContext} from './helpers/auth/useAuthContext';

import {Navbar} from './components';
import {establishUserSession} from './helpers/auth';

const Routes = () => {
  const {cognitoUser} = useAuthContext();

  React.useEffect(() => {
    if (cognitoUser) {
      establishUserSession(cognitoUser);
      const username = cognitoUser.getUsername();

      mixpanel.identify(username);

      mixpanel.people.set({
        $last_login: new Date().toISOString(),
        userId: username,
      });
    }
  }, [cognitoUser]);

  return (
    <>
      <Router>
        <Route path="/login" component={Authentication} />

        {cognitoUser && <Navbar />}

        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/recipe/:recipeId" component={StepByStep} />
          <ProtectedRoute path="/profile/:profileId" component={Profile} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;

const ProtectedRoute = ({
  component: Component,
  ...rest
}: {
  component: any;
  path: string;
  exact?: boolean;
}) => {
  const {cognitoUser} = useAuthContext();

  return (
    <Route
      {...rest}
      render={props =>
        cognitoUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: props.location},
            }}
          />
        )
      }
    />
  );
};
