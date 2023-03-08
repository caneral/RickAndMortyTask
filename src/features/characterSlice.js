import rickApi from '@api/index';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

const initialState = {
  characters: {
    data: null,
    filteredData: [],
    loading: false,
    error: null,
  },
  favorites: {
    data: [],
  },
};

export const getCharacters = createAsyncThunk('characters/get', async page => {
  const response = await rickApi.get.getCharacter(page);
  return response;
});

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setToFavorite: (state, action) => {
      const data = state.favorites.data;
      const notificationTitle = 'Rick And Morty';
      const notificationMessage =
        'Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.';

      if (data.some(c => c.id === action.payload.id)) {
        const filteredData = data.filter(c => c.id !== action.payload.id);
        state.favorites.data = filteredData;
      } else {
        if (data.length === 10) {
          // state.favorites.warning = {active: true}
          if (Platform.OS === 'ios') {
            PushNotificationIOS.requestPermissions().then(() => {
              PushNotificationIOS.presentLocalNotification({
                alertTitle: notificationTitle,
                alertBody: notificationMessage,
              });
            });
          } else {
            const createChannels = () => {
              PushNotification.createChannel({
                channelId: 'rick-channel',
                channelName: 'Rick Channel',
              });
            };

            createChannels();

            PushNotification.localNotification({
              channelId: 'rick-channel',
              title: notificationTitle,
              message: notificationMessage,
            });
          }
        } else {
          state.favorites.data.push(action.payload);
        }
      }
    },
    filterCharacters: (state, action) => {
      const data = state.characters.data;
      if (data) {
        state.characters.filteredData = data.filter(character =>
          character[action.payload.key]
            .toLowerCase()
            .includes(action.payload.value.toLowerCase()),
        );
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getCharacters.pending, (state, action) => {
      state.characters.loading = true;
      state.characters.error = null;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters.loading = false;
      state.characters.data = action.payload.data;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.characters.loading = false;
      state.characters.error = action.error;
    });
  },
});

export const {setToFavorite, filterCharacters} = characterSlice.actions;

export default characterSlice.reducer;
