import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songReducer from "./slice/songSlice";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
  song: songReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
