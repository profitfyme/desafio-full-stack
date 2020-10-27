import { User } from '../../interfaces/models/user.interface';

export interface InitialState {
  user?: User | null;
  token?: string | null;
  password?: {
    current?: string;
    confirmation?: string;
  }
}

export enum ActionTypes {
  SET_USER = 'SET_USER',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_INITIAL_STATE = 'SET_INITIAL_STATE',
}

export interface Action extends InitialState {
  type: ActionTypes;
}
