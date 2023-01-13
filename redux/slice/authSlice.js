import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SHOW_MODAL: (state, action) => {
      state.showModal = true;
    },
    CLOSE_MODAL: (state, action) => {
      state.showModal = false;
    },
  },
});

export const { SHOW_MODAL, CLOSE_MODAL } = authSlice.actions;
export const selectShowModal = (state) => state.auth.showModal;

export default authSlice.reducer;
