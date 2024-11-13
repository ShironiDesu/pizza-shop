import { createSlice } from "@reduxjs/toolkit";

const loginReducer = createSlice({
  name: "login",
  initialState: {
    currentUser: null,
    error: null,
    user: {
      login: "user",
      password: "user",
      role: "customer",
    },
    admin: {
      login: "admin",
      password: "admin",
      role: "admin",
    },
  },
  reducers: {
    login: (state, action) => {
      const { login, password } = action.payload;
      if (state.admin.login === login && state.admin.password === password) {
        state.currentUser = {
          login: state.admin.login,
          role: state.admin.role,
        };
        state.error = null;
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      } else if (
        state.user.login === login &&
        state.user.password === password
      ) {
        state.currentUser = {
          login: state.user.login,
          role: state.user.role,
        };
        state.error = null;
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      } else {
        state.currentUser = null;
        state.error = "Invalid login or password";
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.error = null;
      localStorage.removeItem("currentUser");
    },
    initializeUser: (state) => {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        state.currentUser = JSON.parse(storedUser);
      }
    },
  },
});

export const { login, logout, initializeUser } = loginReducer.actions;
export default loginReducer.reducer;
