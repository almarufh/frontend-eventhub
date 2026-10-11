import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const origin = import.meta.env.VITE_HOST_ORIGIN;

const initialState = {
  events: {
    joined: [],
    saved: [],
    filtered: [],
  },
  count: {
    joined: 0,
    saved: 0,
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  message: null,
};

export const getMyEventsJoined = createAsyncThunk(
  'getMyEventsJoined',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/user/events/joined`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

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

export const getMyEventsSaved = createAsyncThunk(
  'getMyEvents',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/user/events/saved`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

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

export const joinEvent = createAsyncThunk(
  'joinEvent',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/events/${payload}/join`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

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

export const leaveEvent = createAsyncThunk(
  'leaveEvent',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/events/${payload}/leave`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }
      data.id = payload;
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

export const saveEvent = createAsyncThunk(
  'saveEvent',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/events/${payload}/save`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

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

export const unsaveEvent = createAsyncThunk(
  'unsaveEvent',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/events/${payload}/unsave`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }
      data.id = payload;
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

const events = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getMyEventsJoined
      .addCase(getMyEventsJoined.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isRejected = false;
        state.message = null;
      })
      .addCase(getMyEventsJoined.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = payload.message;
        state.count.joined = payload.data.total;
        state.events.joined = payload.data.data;
      })
      .addCase(getMyEventsJoined.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      // getMyEventsSaved
      .addCase(getMyEventsSaved.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isRejected = false;
        state.message = null;
      })
      .addCase(getMyEventsSaved.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = payload.message;
        state.count.saved = payload.data.total;
        state.events.saved = payload.data.data;
      })
      .addCase(getMyEventsSaved.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      // JoinEvent
      .addCase(joinEvent.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isRejected = false;
        state.message = null;
      })
      .addCase(joinEvent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = payload.message;
      })
      .addCase(joinEvent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      // leaveEvent
      .addCase(leaveEvent.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isRejected = false;
        state.message = null;
      })
      .addCase(leaveEvent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = payload.message;
        state.count.joined -= 1;
        state.events.joined = state.events.joined.filter(
          (events) => events.id != payload.id
        );
      })
      .addCase(leaveEvent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      // SaveEvent
      .addCase(saveEvent.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isRejected = false;
        state.message = null;
      })
      .addCase(saveEvent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = payload.message;
      })
      .addCase(saveEvent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      // UnsaveEvent
      .addCase(unsaveEvent.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isRejected = false;
        state.message = null;
      })
      .addCase(unsaveEvent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.count.saved -= 1;
        state.events.saved = state.events.saved.filter(
          (events) => events.id != payload.id
        );
        state.message = payload.message;
      })
      .addCase(unsaveEvent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      });
  },
});

export const { filterEvents } = events.actions;

export default events.reducer;
