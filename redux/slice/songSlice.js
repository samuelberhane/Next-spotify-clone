import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlists: [],
  playlistID: null,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    GET_PLAYLISTS: (state, action) => {
      state.playlists = action.payload;
    },
    PLAYLIST_ID: (state, action) => {
      state.playlistID = action.payload;
    },
  },
});

export const { GET_PLAYLISTS, PLAYLIST_ID } = songSlice.actions;
export const selectPlaylists = (state) => state.song.playlists;
export const selectPlaylistID = (state) => state.song.playlistID;

export default songSlice.reducer;
