import { createAction, createReducer } from '@reduxjs/toolkit';
import { initAsyncStatusState } from './asyncstatus.state';

const initAsyncStatus = createAction('[async status] init');

const asyncStart = createAction<{ type: string; }>('[async status] async start');
const asyncEnd = createAction<{ type: string; }>('[async status] async end');
const initError = createAction<{ type: string; }>('[async status] init async action error');
const setError = createAction<{ type: string; }>('[async status] set async action error');

export const asyncStatusAction = {
  initAsyncStatus,
  asyncStart,
  asyncEnd,
  initError,
  setError,
};

export const asyncStatusReducer = createReducer(
  initAsyncStatusState,
  (b) => b
    .addCase(
      initAsyncStatus,
      () => initAsyncStatusState,
    )
    .addCase(
      asyncStart,
      (state, { payload }) => {
        state.stack.push(payload.type);
      },
    )
    .addCase(
      asyncEnd,
      (state, { payload }) => {
        state.stack = state.stack.filter((item) => item !== payload.type);
      },
    )
    .addCase(
      initError,
      (state, { payload }) => {
        state.error = state.error.filter((item) => item !== payload.type);
      },
    )
    .addCase(
      setError,
      (state, { payload }) => {
        state.error.push(payload.type);
      },
    )
  ,
);
