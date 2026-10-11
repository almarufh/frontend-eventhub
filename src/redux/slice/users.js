import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
};

export const getUsers = createAsyncThunk(
  'getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const data = '/data/users.json';
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  'createRegister',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const users = state.users.data;
      let user = users.find((e) => e.email === payload.email);
      if (user) {
        return rejectWithValue('Email sudah tersedia !');
      }
      user = {
        ...payload,
        id: `user-${users.length + 1}`,
        createdAt: `${Date.now()}`,
        updatedAt: `${Date.now()}`,
      };
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changePasword = createAsyncThunk(
  'changePasword',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const users = state.users.data;
      let user = users.find((e) => e.email === payload.email);
      if (!user) {
        return rejectWithValue('Email tidak tersedia !');
      }
      return payload;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    delMessage: (prevState) => {
      prevState.message = null;
      prevState.isError = false;
    },
    checkEmail: (state, { payload }) => {
      const user = state.data.find((e) => e.email === payload.toLowerCase());
      if (!user) {
        state.isPending = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = `${payload} belum terdaftar !`;
        return;
      }

      state.isPending = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = `${payload} sudah terdaftar !`;
    },
  },
  extraReducers: (builder) => {
    builder
      // Load users
      .addCase(getUsers.pending, (state) => {
        state.isPending = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = null;
        state.data = [];
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isPending = false;
        state.isSuccess = true;
        state.message = 'success load users !';
        state.data = payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isPending = false;
        state.isError = true;
        state.message = 'failed load users !';
      })
      // Change Password
      .addCase(changePasword.pending, (state) => {
        state.isPending = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = null;
      })
      .addCase(changePasword.fulfilled, (state, { payload }) => {
        state.isPending = false;
        state.isSuccess = true;
        state.message = 'success change password !';

        const user = state.data.findIndex((e) => e.email === payload.email);

        if (user !== -1) {
          state.data[user] = {
            ...state.data[user],
            ...payload,
          };
        }
      })
      .addCase(changePasword.rejected, (state, { payload }) => {
        state.isPending = false;
        state.isError = true;
        state.message = payload;
      })
      // Create USer
      .addCase(createUser.pending, (state) => {
        state.isPending = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = null;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isPending = false;
        state.isSuccess = true;
        state.message = 'success create user !';
        state.data.push(payload);
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        state.isPending = false;
        state.isError = true;
        state.message = payload || 'failed create user !';
      });
  },
});

export const { delMessage, checkEmail } = users.actions;

export default users.reducer;
