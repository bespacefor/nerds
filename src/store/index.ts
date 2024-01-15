import { combineReducers, configureStore } from '@reduxjs/toolkit';

import elixirReducer from './slices/elixirSlice';

const rootReducer = combineReducers({
  elixir: elixirReducer
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
