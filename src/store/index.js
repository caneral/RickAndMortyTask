import episodeReducer from '@features/episodeSlice';
import characterReducer from '@features/characterSlice';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistCharacterConfig = {
  key: 'character',
  storage: AsyncStorage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(
  persistCharacterConfig,
  characterReducer,
);

export const store = configureStore({
  reducer: {
    episode: episodeReducer,
    character: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
