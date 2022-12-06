

import { combineReducers } from "redux";
import auth from "./auth";

const appReducer = combineReducers({
    auth,
    // counterReducer
})

export default appReducer