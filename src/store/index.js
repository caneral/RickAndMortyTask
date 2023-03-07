import episodeReducer from '@features/episodeSlice';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    episode: episodeReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
