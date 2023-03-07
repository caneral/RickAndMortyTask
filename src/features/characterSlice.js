import rickApi from '@api/index';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  characters: {
    data: null,
    loading: false,
    error: null,
  },
};

export const getCharacters = createAsyncThunk('characters/get', async page => {
  const response = await rickApi.get.getCharacter(page);
  return response;
});

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
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

export default characterSlice.reducer;
