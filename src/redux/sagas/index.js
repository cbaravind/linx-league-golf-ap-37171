/**
 *  Redux saga class init
 */
import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/types';
import homeSaga from './homeSaga';
import signinSaga from './signinSaga';

export default function* watch() {
  yield all([
    takeEvery(types.LOADING, homeSaga),
    takeEvery(types.SIGNIN_USER, signinSaga),
  ]);
}
