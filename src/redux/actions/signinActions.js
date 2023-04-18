import * as types from './types';

export function toggleLoader(flag) {
  return {
    type: types.LOADING,
    flag,
  };
}

export function signin() {
  return {
    type: types.SIGNIN_USER,
  };
}
export function signinSuccess() {
  return {
    type: types.SIGNIN_SUCCESS,
  };
}
export function signinError() {
  return {
    type: types.SIGNIN_ERROR,
  };
}
