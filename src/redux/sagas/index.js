/**
 *  Redux saga class init
 */
import { takeEvery, all } from "redux-saga/effects"
import * as types from "../actions/types"
import homeSaga from "./homeSaga"

export default function* watch() {
  yield all([takeEvery(types.HOME_LOADING, homeSaga)])
}
