/* Sign In Reducer
 * handles Sign In flow states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: false,
  email: '',
  password: '',
  token: null,
  user: {},
};

export const signinReducer = createReducer(initialState, {
  [types.LOADING](state, action) {
    return {
      ...state,
      isLoading: action.flag,
    };
  },

  [types.SIGNIN_USER](state, action) {
    return {
      ...state,
      email: action.data.email,
      password: action.data.password,
    };
  },
  [types.SIGNIN_SUCCESS](state, action) {
    return {
      ...state,
      token: action.data.token,
      user: action.data.user,
    };
  },
});
