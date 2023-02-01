import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  isPlaying: false,
  activeSong: {},
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    PLAY_SONG: (state, action) => {
      state.currentSongs = [...state.currentSongs, action.payload];
      (state.activeSong = action.payload), (state.isPlaying = true);
    },
    PAUSE_SONG: (state, action) => {
      state.isPlaying = false;
    },
    RESTART_SONG: (state, action) => {
      state.isPlaying = true;
    },
    FIRST_SONG: (state, action) => {
      state.activeSong = action.payload;
    },
  },
});

export const { PLAY_SONG, PAUSE_SONG, FIRST_SONG, RESTART_SONG } =
  songSlice.actions;
export const selectCurrentSongs = (state) => state.song.currentSongs;
export const selectIsPlaying = (state) => state.song.isPlaying;
export const selectActiveSong = (state) => state.song.activeSong;

export default songSlice.reducer;
