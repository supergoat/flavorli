import React from 'react';
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
    }
  }, [cognitoUser]);

  return (
    <>
      <Router>
        <>
          <Navbar />

          <Switch>
            <ProtectedRoute exact path="/" component={Home} />

            <ProtectedRoute path="/recipe/:recipeId" component={StepByStep} />
            <ProtectedRoute path="/profile/:profileId" component={Profile} />
            <Route path="/login" component={Authentication} />
          </Switch>
        </>
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
