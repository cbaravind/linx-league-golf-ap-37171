/* Home Reducer
 * handles Home screen states in the app
 */
import createReducer from "../lib/createReducer"
import * as types from "../actions/types"

const initialState = {
  isLoading: false
}

export const homeReducer = createReducer(initialState, {
  [types.HOME_LOADING](state, action) {
    return {
      ...state,
      isLoading: action.flag
    }
  }
  //other reducers
  //   [types.TYPE_NAME](state, action) {
  //     return {
  //       ...state,
  //       data: {...state.data},
  //     };
  //   },
})
