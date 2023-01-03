import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./reducers/AuthSlice"
import UserSlice from "./reducers/UserSlice"

export const store = configureStore({
    reducer: {
      auth: AuthSlice,
      user: UserSlice
    },
  })