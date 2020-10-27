import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../providers/Auth/useAuth';

interface Props {
  loggedInPath?: string;
  path: string;
  children: React.ReactNode;
}

export function IsUserRedirect(props: Props) {
  const { loggedInPath, path, children } = props;

  const [state] = useAuth();

  return (
    <Route
      path={path}
      render={() => {
        if (!state.token) {
          return children;
        }

        if (state.token) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute(props: Props) {
  const { path, children } = props;

  const [state] = useAuth();

  return (
    <Route
      path={path}
      render={({ location }) => {
        if (state.token) {
          return children;
        }

        if (!state.token) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
