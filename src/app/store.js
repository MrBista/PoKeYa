import { configureStore } from '@reduxjs/toolkit';
import mainSlice from '../features/mainSlice';
import { pokemonApi } from '../services/POKEMONAPI';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
export const store = configureStore({
  reducer: {
    main: mainSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
