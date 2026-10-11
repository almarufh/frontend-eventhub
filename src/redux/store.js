import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/es/storage';

import authReducer from './slice/auth.js';
import categoryReducer from './slice/category.js';
import communitiesReducer from './slice/communities.js';
import discussionsReducer from './slice/discussions.js';
import eventsReducer from './slice/events.js';
import userReducer from './slice/user.js';
import usersReducer from './slice/users.js';

const eventsPersistConfig = {
  key: 'events',
  storage,
  whitelist: ['data'],
};

const categoryPersistConfig = {
  key: 'category',
  storage,
  whitelist: ['data'],
};

const discussionsPersistConfig = {
  key: 'discussions',
  storage,
  whitelist: ['data'],
};

const communitiesPersistConfig = {
  key: 'communities',
  storage,
  whitelist: ['data'],
};

const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['data'],
};

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['data'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth', 'user'],
};

const store = configureStore({
  reducer: {
    events: persistReducer(eventsPersistConfig, eventsReducer),
    categorys: persistReducer(categoryPersistConfig, categoryReducer),
    discussions: persistReducer(discussionsPersistConfig, discussionsReducer),
    communities: persistReducer(communitiesPersistConfig, communitiesReducer),
    users: persistReducer(usersPersistConfig, usersReducer),
    eventHub: persistReducer(userPersistConfig, userReducer),
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export default store;
