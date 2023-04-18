/*
 * combines all the existing reducers
 */

import * as signinReducer from './signinReducer';

export default Object.assign({}, signinReducer);
