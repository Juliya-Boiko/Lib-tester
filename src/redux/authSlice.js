import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  isLogged: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    loginUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    logoutUser(state) {
      state.email = null;
      state.token = null;
      state.isLogged = false;
    },
  }
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
