import { User } from '../../interfaces/models/user.interface';

export interface InitialState {
  user?: User | null;
  token?: string | null;
}

export enum ActionTypes {
  SET_USER = 'SET_USER',
  SET_INITIAL_STATE = 'SET_INITIAL_STATE',
}

export interface Action extends InitialState {
  type: ActionTypes;
}
