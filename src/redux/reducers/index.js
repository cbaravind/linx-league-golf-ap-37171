/*
 * combines all the existing reducers
 */

import * as homeReducer from "./homeReducer"

export default Object.assign({}, homeReducer)
