import {put, call} from 'redux-saga/effects';

import * as homeActions from '../actions/homeActions';
// Our worker Saga that registers the user
export default function* homeSaga(action) {
  yield put(homeActions.toggleLoader(true));
  try {
    // const resp = yield call(api.fetchData);
    // console.log('resp', resp);
    yield put(homeActions.toggleLoader(false));
  } catch (err) {
    if (__DEV__) {
      console.warn(err);
    }
  }
  yield put(homeActions.toggleLoader(false));
}
