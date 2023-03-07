import rickApi from '@api/index';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  episodes: {
    data: null,
    loading: false,
    error: null,
  },
  episode: {
    data: null,
    loading: false,
    error: null,
  },
};

export const getEpisodes = createAsyncThunk('episodes/get', async page => {
  const response = await rickApi.get.getEpisodes(page);
  return response;
});

export const getEpisode = createAsyncThunk('episode/get', async id => {
  const response = await rickApi.get.getEpisode(id);
  return response;
});

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getEpisodes.pending, (state, action) => {
      state.episodes.loading = true;
      state.episodes.error = null;
    });
    builder.addCase(getEpisodes.fulfilled, (state, action) => {
      state.episodes.loading = false;
      state.episodes.data = action.payload.data;
    });
    builder.addCase(getEpisodes.rejected, (state, action) => {
      state.episodes.loading = false;
      state.episodes.error = action.error;
    });
    builder.addCase(getEpisode.pending, (state, action) => {
      state.episode.loading = true;
      state.episode.error = null;
    });
    builder.addCase(getEpisode.fulfilled, (state, action) => {
      state.episode.loading = false;
      state.episode.data = action.payload.data;
    });
    builder.addCase(getEpisode.rejected, (state, action) => {
      state.episode.loading = false;
      state.episode.error = action.error;
    });
  },
});

export default episodeSlice.reducer;
