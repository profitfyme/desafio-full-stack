import React from 'react';
import { ActionTypes, InitialState, Action } from './types';

export { initialState } from './reducer';

export { ActionTypes };

export const AuthContext = React.createContext<
  [InitialState, React.Dispatch<Action>] | null
>(null);

interface Provider {
  reducer: (prevState: InitialState, action: Action) => InitialState;
  initialState: InitialState;
}

export const AuthProvider: React.FC<Provider> = ({
  reducer,
  initialState,
  children,
}) => (
  <AuthContext.Provider value={React.useReducer(reducer, initialState)}>
    {children}
  </AuthContext.Provider>
);

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
