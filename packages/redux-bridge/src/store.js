import { combineReducers, configureStore } from '@reduxjs/toolkit';

const staticReducers = {};
let asyncReducers = {};

export const store = configureStore({
  reducer: combineReducers(staticReducers),
  middleware: (gDM) => gDM(),
  devTools: import.meta.env.DEV,
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export const injectReducer = (key, reducer) => {
  if (asyncReducers[key]) return;
  asyncReducers = { ...asyncReducers, [key]: reducer };
  store.replaceReducer(combineReducers({ ...staticReducers, ...asyncReducers }));
}

