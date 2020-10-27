import { ActionTypes, InitialState, Action } from './types';

export { ActionTypes };

export const initialState: InitialState = {
  user: {
    firstname: '',
    lastname: '',
    email: '',
  },
};

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case ActionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };

    case ActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case ActionTypes.SET_INITIAL_STATE:
      return {
        ...action,
      };

    default:
      return { ...state };
  }
};

export default reducer;
