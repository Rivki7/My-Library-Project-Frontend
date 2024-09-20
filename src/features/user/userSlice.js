// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(sessionStorage.getItem('user')) || null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      sessionStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.user = null;
      sessionStorage.removeItem('user');
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
