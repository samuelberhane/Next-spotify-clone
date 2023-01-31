import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlists: [],
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    GET_PLAYLISTS: (state, action) => {
      state.playlists = action.payload;
    },
  },
});

export const { GET_PLAYLISTS } = songSlice.actions;
export const selectPlaylists = (state) => state.song.playlists;

export default songSlice.reducer;
