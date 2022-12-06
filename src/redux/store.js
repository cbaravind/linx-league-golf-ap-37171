import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers'
import auth from './reducers/auth'

const store = configureStore({
  reducer:appReducer,
})
export default store