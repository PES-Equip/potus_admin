import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    getUserLogout: (state) => {
        state.user = {}
    }
  },
});

export const {
  getUserPending,
  getUserSuccess,
  getUserFail,
  getUserLogout,
} = userSlice.actions;

export default userSlice.reducer;