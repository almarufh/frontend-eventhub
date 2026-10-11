import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
};

export const getCategory = createAsyncThunk(
  'getCategory',
  async (_, { rejectWithValue }) => {
    try {
      const data = '/data/categorys.json';
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const category = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = null;
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = 'success load category !';
        state.data = payload;
      })
      .addCase(getCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = 'failed load category !';
      });
  },
});

export default category.reducer;
