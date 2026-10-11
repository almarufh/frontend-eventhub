import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
};

export const getDisscussions = createAsyncThunk(
  'getDiscussions',
  async (_, { rejectWithValue }) => {
    try {
      const data = '/data/discussions.json';
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const discussions = createSlice({
  name: 'discussions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDisscussions.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = null;
      })
      .addCase(getDisscussions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = 'success load discussions !';
        state.data = payload;
      })
      .addCase(getDisscussions.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = 'failed load discussions !';
      });
  },
});

export default discussions.reducer;
