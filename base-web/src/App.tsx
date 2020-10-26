import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './constants/routes';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  const user = null;

  return (
    <Router>
      <Switch>
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
    </Router>
  );
}

export default App;
