import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  widthAside: 0,
  showAside: '-translate-x-[100%]',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    doShowSide: (state, action) => {
      switch (action.payload) {
        case 'show':
          state.showAside = 'translate-x-[0]';
          break;
        default:
          state.showAside = '-translate-x-[100%]';
          break;
      }
    },
    saveWidthAside: (state, action) => {
      state.widthAside = action.payload;
    },
  },
});

export const { doShowSide, saveWidthAside } = mainSlice.actions;

export default mainSlice.reducer;
