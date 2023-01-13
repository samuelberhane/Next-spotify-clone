import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showSubmenu: false,
  submenuTitle: "",
  submenuText: "",
  location: null,
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
    SET_SUBMENU: (state, action) => {
      (state.showSubmenu = true),
        (state.submenuTitle = action.payload.submenuTitle),
        (state.submenuText = action.payload.submenuText),
        (state.location = action.payload.location);
    },
    CLOSE_SUBMENU: (state, action) => {
      state.showSubmenu = false;
    },
  },
});

export const { SHOW_MODAL, CLOSE_MODAL, SET_SUBMENU, CLOSE_SUBMENU } =
  authSlice.actions;
export const selectShowModal = (state) => state.auth.showModal;
export const selectShowSubmenu = (state) => state.auth.showSubmenu;
export const selectSubmenuTitle = (state) => state.auth.submenuTitle;
export const selectSubmenuText = (state) => state.auth.submenuText;
export const selectLocation = (state) => state.auth.location;

export default authSlice.reducer;
