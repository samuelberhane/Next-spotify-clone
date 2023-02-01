import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {},
});

export const {} = songSlice.actions;
export const selectCurrentSongs = (state) => state.song.currentSongs;
export const selectCurrentIndex = (state) => state.song.currentIndex;
export const selectIsActive = (state) => state.song.isActive;
export const selectIsPlaying = (state) => state.song.isPlaying;
export const selectActiveSong = (state) => state.song.activeSong;

export default songSlice.reducer;
