import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlists: [],
  playlistID: null,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {},
});

export const {} = songSlice.actions;

export default songSlice.reducer;
