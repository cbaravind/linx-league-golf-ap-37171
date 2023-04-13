import * as types from "./types"

export function toggleLoader(flag) {
  return {
    type: types.HOME_LOADING,
    flag
  }
}

//action for fetching data from the Back-end
// export function getData() {
//   return {
//     type: types.TYPE_NAME
//   }
// }

//action for storing card Details to cardReducer
// export function storeData(data) {
//   return {
//     type: types.TYPE_NAME,
//     data
//   }
// }

//action for updating spend limit value; both FE and BE (currently only implemented FE)
export function updateSpendLimit(value) {
  return {
    type: types.UPDATE_SPEND_LIMIT,
    value
  }
}

//action for freeze/unfreeze; only implemented to update cardReducer
export function toggleCardState(flag) {
  return {
    type: types.TOGGLE_CARD_STATE,
    flag
  }
}
