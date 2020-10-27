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
  const user = null;

  return (
    <Router>
      <AuthProvider initialState={initialState} reducer={reducer}>
        <Switch>
          <IsUserRedirect user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.RECOVER}>
            <Recover />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP}>
            <SignUp />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.DASHBOARD}>
            <div>Dashboard</div>
          </ProtectedRoute>
          <IsUserRedirect user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.HOME}>
            <Home />
          </IsUserRedirect>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default React.memo(App);
