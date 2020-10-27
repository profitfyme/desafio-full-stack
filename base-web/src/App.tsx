import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './constants/routes';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Recover from './pages/Recover';
import { AuthProvider } from './providers/Auth/useAuth';
import reducer, { initialState } from './providers/Auth/reducer';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider initialState={initialState} reducer={reducer}>
        <Switch>
          <IsUserRedirect loggedInPath={ROUTES.DASHBOARD} path={ROUTES.RECOVER}>
            <Recover />
          </IsUserRedirect>
          <IsUserRedirect loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP}>
            <SignUp />
          </IsUserRedirect>
          <ProtectedRoute path={ROUTES.DASHBOARD}>
            <Home />
          </ProtectedRoute>
          <IsUserRedirect loggedInPath={ROUTES.DASHBOARD} path={ROUTES.ROOT}>
            <SignIn />
          </IsUserRedirect>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default React.memo(App);
