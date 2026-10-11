import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const origin = import.meta.env.VITE_HOST_ORIGIN;

const initialState = {
  joined: [],
  communities: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  message: null,
};

export const getMyCommunitiesJoined = createAsyncThunk(
  'getMyCommunitiesJoined',
  async (_, { getState, rejectWithValue }) => {
    console.log('getMyCommunitiesJoined');
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/user/community/joined`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log('Data getMyCommunitiesJoined : ', data);

      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      const data = {
        success: false,
        message: error.message,
        data: null,
      };
      return rejectWithValue(data);
    }
  }
);
export const joinCommunitiy = createAsyncThunk(
  'joinCommunitiy',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/communities/${payload.id}/join`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log('Data joinCommunitiy : ', data);

      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      const data = {
        success: false,
        message: error.message,
        data: null,
      };
      return rejectWithValue(data);
    }
  }
);

export const leaveCommunitiy = createAsyncThunk(
  'leaveCommunitiy',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(
        `${origin}/communities/${payload.id}/leave`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log('Data leaveCommunitiy : ', data);

      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      const data = {
        success: false,
        message: error.message,
        data: null,
      };
      return rejectWithValue(data);
    }
  }
);

const communities = createSlice({
  name: 'communities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getMyCommunitiesJoined, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
          state.message = null;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          if (payload.success) {
            state.isFulfilled = true;
            state.joined = payload.data.data;
            state.message = payload.message;
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.message = payload.message;
        },
      })
      .addAsyncThunk(leaveCommunitiy, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
          state.message = null;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          if (payload.success) {
            state.isFulfilled = true;
            state.message = payload.message;
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.message = payload.message;
        },
      });
  },
});

export default communities.reducer;
