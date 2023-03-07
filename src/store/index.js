import episodeReducer from '@features/episodeSlice';
import characterReducer from '@features/characterSlice';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    episode: episodeReducer,
    character: characterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
