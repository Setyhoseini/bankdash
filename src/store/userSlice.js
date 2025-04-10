import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;