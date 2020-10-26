import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { User } from '../interfaces/models/user.interface';

interface Props {
  user: User | null;
  loggedInPath?: string;
  path: string;
  children: React.ReactNode;
}

export function IsUserRedirect(props: Props) {
  const { user, loggedInPath, path, children } = props;
  return (
    <Route
      path={path}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
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
  const { user, path, children } = props;
  return (
    <Route
      path={path}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
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
