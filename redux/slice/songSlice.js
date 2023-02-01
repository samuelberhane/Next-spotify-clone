import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  isPlaying: false,
  activeSong: {},
  shuffle: false,
  songIndex: 0,
};

const checkIndex = (index, state) => {
  if (index > state.currentSongs.length - 1) return 0;
  if (index < 0) return state.currentSongs.length - 1;
  return index;
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    PLAY_SONG: (state, action) => {
      state.currentSongs = [...state.currentSongs, action.payload];
      state.activeSong = action.payload;
      state.isPlaying = true;
      state.songIndex = state.songIndex + 1;
    },
    PAUSE_SONG: (state, action) => {
      state.isPlaying = false;
    },
    RESTART_SONG: (state, action) => {
      state.isPlaying = true;
    },
    FIRST_SONG: (state, action) => {
      state.activeSong = action.payload;
      state.currentSongs = [action.payload];
    },
    UPDATE_SHUFFLE: (state, action) => {
      state.shuffle = !state.shuffle;
    },
    PREV_SONG: (state, action) => {
      state.isPlaying = true;
      state.songIndex = checkIndex(state.songIndex - 1, state);
      state.activeSong = state.currentSongs[state.songIndex];
    },
    NEXT_SONG: (state, action) => {
      state.isPlaying = true;
      state.songIndex = checkIndex(state.songIndex + 1, state);
      state.activeSong = state.currentSongs[state.songIndex];
    },
    SHUFFLE_SONG: (state, action) => {
      (state.isPlaying = true),
        (state.songIndex = Math.floor(
          Math.random() * state.currentSongs.length
        ));
      state.activeSong = state.currentSongs[state.songIndex];
    },
  },
});

export const {
  PLAY_SONG,
  PAUSE_SONG,
  FIRST_SONG,
  RESTART_SONG,
  UPDATE_SHUFFLE,
  NEXT_SONG,
  PREV_SONG,
  SHUFFLE_SONG,
} = songSlice.actions;
export const selectCurrentSongs = (state) => state.song.currentSongs;
export const selectIsPlaying = (state) => state.song.isPlaying;
export const selectActiveSong = (state) => state.song.activeSong;
export const selectShuffle = (state) => state.song.shuffle;
export const selectSongIndex = (state) => state.song.songIndex;

export default songSlice.reducer;
