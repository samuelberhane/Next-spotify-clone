import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songReducer from "./slice/songSlice";

const rootReducer = combineReducers({
  song: songReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
