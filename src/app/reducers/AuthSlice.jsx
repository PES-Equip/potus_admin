import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  auth: undefined,
  error: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authPending: (state) => {
      state.isLoading = true;
    },
    authSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.isAuth = true;
      state.auth = payload
      state.error = "";
    },
    authFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    logout: (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.auth = undefined;
        state.error = "";
    }
  },
});

const { reducer, actions } = AuthSlice;

export const { authPending, authSuccess, authFail, logout } = actions;

export default reducer;