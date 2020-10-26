import { ActionTypes, InitialState, Action } from './types';

export { ActionTypes };

export const initialState: InitialState = {
  user: {
    id: null,
    firstname: '',
    lastname: '',
    email: '',
    updatedAt: null,
  },
  token: null
};

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
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
