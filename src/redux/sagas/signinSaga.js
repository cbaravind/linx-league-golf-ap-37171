import {put, call} from 'redux-saga/effects';

import * as signinActions from '../actions/signinActions';
// Our worker Saga that registers the user
export default function* signinSaga(action) {
  yield put(signinActions.toggleLoader(true));
  try {
    // const resp = yield call(api.fetchData);
    // console.log('resp', resp);
    //if response is true store the response data and token
    yield put(signinActions.toggleLoader(false));
  } catch (err) {
    if (__DEV__) {
      console.warn(err);
    }
  }
  yield put(signinActions.toggleLoader(false));
}
