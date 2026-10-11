import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getDateTime from '../../utils/getDateTime';

const origin = import.meta.env.VITE_HOST_ORIGIN;

const initialState = {
  auth: {
    isActive: false,
    token: null,
  },
  user: {
    name: null,
    role: 'guest',
    dark_preference: false,
    email: null,
    address: null,
    job: null,
    office: null,
    image: null,
    description: null,
    created_at: null,
  },
  register: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    message: null,
  },
  logout: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    message: null,
  },
  login: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    message: null,
  },
  getUser: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    message: null,
  },
  setUser: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    message: null,
  },
  password: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    message: null,
  },
};

export const authRegister = createAsyncThunk(
  'authRegister',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${origin}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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

export const authLogin = createAsyncThunk(
  'authLogin',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${origin}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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

export const authLogout = createAsyncThunk(
  'authLogout',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/auth/logout`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
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

export const getUser = createAsyncThunk(
  'getUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
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

export const setUser = createAsyncThunk(
  'setUser',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/user`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: payload,
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

export const changePassword = createAsyncThunk(
  'changePassword',
  async (payload, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth.token;
      const response = await fetch(`${origin}/user/password`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
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

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deleteMessage: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
      state.actived = {
        isActive: false,
        auth: null,
      };
      state.user = {};
    },
    resetRegister: (state) => {
      state.register.isPending = false;
      state.register.isFulfilled = false;
      state.register.isRejected = false;
      state.register.message = null;
    },
    resetLogin: (state) => {
      state.login.isPending = false;
      state.login.isFulfilled = false;
      state.login.isRejected = false;
      state.login.message = null;
    },
    resetLogout: (state) => {
      state.logout.isPending = false;
      state.logout.isFulfilled = false;
      state.logout.isRejected = false;
      state.logout.message = null;
    },
    resetPassword: (state) => {
      state.password.isPending = false;
      state.password.isFulfilled = false;
      state.password.isRejected = false;
      state.password.message = null;
    },
    resetSetUser: (state) => {
      state.setUser.isPending = false;
      state.setUser.isFulfilled = false;
      state.setUser.isRejected = false;
      state.setUser.message = null;
    },
  },
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(authRegister, {
        pending: (state) => {
          state.register.isPending = true;
          state.register.isFulfilled = false;
          state.register.isRejected = false;
          state.register.message = null;
        },
        fulfilled: (state, { payload }) => {
          state.register.isPending = false;
          if (payload.success) {
            state.register.isFulfilled = true;
            state.register.message = payload.message;
          }
        },
        rejected: (state, { payload }) => {
          state.register.isPending = false;
          state.register.isRejected = true;
          state.register.message = payload.message;
        },
      })
      .addAsyncThunk(changePassword, {
        pending: (state) => {
          state.password.isPending = true;
          state.password.isFulfilled = false;
          state.password.isRejected = false;
          state.password.message = null;
        },
        fulfilled: (state, { payload }) => {
          state.password.isPending = false;
          if (payload.success) {
            state.password.isFulfilled = true;
            state.password.message = payload.message;
          }
        },
        rejected: (state, { payload }) => {
          state.password.isPending = false;
          state.password.isRejected = true;
          state.password.message = payload.message;
        },
      })
      .addAsyncThunk(setUser, {
        pending: (state) => {
          state.setUser.isPending = true;
          state.setUser.isFulfilled = false;
          state.setUser.isRejected = false;
          state.setUser.message = null;
        },
        fulfilled: (state, { payload }) => {
          state.getUser.isPending = false;
          if (payload.success) {
            state.setUser.isFulfilled = true;
            state.user = {
              email: payload.data.email,
              name: payload.data.name,
              role: payload.data.role,
              dark_preference: payload.data.dark_preference,
              address: payload.data.address,
              job: payload.data.job,
              office: payload.data.office,
              image: payload.data.image,
              created_at: payload.data.created_at,
            };
            state.setUser.message = payload.message;
          }
        },
        rejected: (state, { payload }) => {
          state.setUser.isPending = false;
          state.setUser.isRejected = true;
          state.setUser.message = payload.message;
        },
      })
      .addAsyncThunk(getUser, {
        pending: (state) => {
          state.getUser.isPending = true;
          state.getUser.isFulfilled = false;
          state.getUser.isRejected = false;
          state.getUser.message = null;
        },
        fulfilled: (state, { payload }) => {
          state.getUser.isPending = false;
          if (payload.success) {
            state.getUser.isFulfilled = true;
            const { date, month, year } = getDateTime(payload.data.created_at);
            state.user = {
              email: payload.data.email,
              name: payload.data.name,
              role: payload.data.role,
              dark_preference: payload.data.dark_preference,
              address: payload.data.address,
              job: payload.data.job,
              office: payload.data.office,
              image: payload.data.image,
              description: payload.data.description,
              created_at: `${date} ${month} ${year}`,
            };
            state.getUser.message = payload.message;
          }
        },
        rejected: (state, { payload }) => {
          state.getUser.isPending = false;
          state.getUser.isRejected = true;
          state.getUser.message = payload.message;
        },
      })
      .addAsyncThunk(authLogin, {
        pending: (state) => {
          state.login.isPending = true;
          state.login.isFulfilled = false;
          state.login.isRejected = false;
          state.login.message = null;
        },
        fulfilled: (state, { payload }) => {
          state.login.isPending = false;
          if (payload.success) {
            state.login.isFulfilled = true;
            state.auth.token = payload.data.token;
            state.auth.isActive = true;
            state.user = {
              name: payload.data.name,
              role: payload.data.role,
              dark_preference: payload.data.dark_preference,
              email: payload.data.email,
              image: payload.data.image,
            };
            state.login.message = payload.message;
          }
        },
        rejected: (state, { payload }) => {
          state.login.isPending = false;
          state.login.isRejected = true;
          state.login.message = payload.message;
        },
      })
      .addAsyncThunk(authLogout, {
        pending: (state) => {
          state.logout.isPending = true;
          state.logout.isFulfilled = false;
          state.logout.isRejected = false;
          state.logout.message = null;
        },
        fulfilled: (state, { payload }) => {
          state.logout.isPending = false;
          console.log('FulFielld : ', payload.success);
          if (payload.success) {
            state.logout = {
              isPending: false,
              isFulfilled: false,
              isRejected: false,
              message: null,
            };
            state.auth = {
              isActive: false,
              token: null,
            };
            state.user = {
              name: null,
              role: 'guest',
              dark_preference: false,
              email: null,
              address: null,
              job: null,
              office: null,
              image: null,
              description: null,
              created_at: null,
            };
          }
        },
        rejected: (state, { payload }) => {
          state.logout.isPending = false;
          state.logout.isRejected = true;
          state.logout.message = payload.message;
        },
      });
  },
});

export const {
  deleteMessage,
  resetRegister,
  resetLogin,
  resetLogout,
  resetPassword,
  resetSetUser,
} = auth.actions;

export default auth.reducer;
