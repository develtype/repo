import { createSelector } from '@reduxjs/toolkit';
import { RootStateType } from '~src/redux/store';

export type asyncStatusStateType = {
  error: string[];
  stack: string[];
};

export const initAsyncStatusState: asyncStatusStateType = {
  error: [],
  stack: [],
};

const asyncStatusState = (state: RootStateType) => state.asyncStatusState;
const stack = createSelector(
  asyncStatusState,
  (asyncStatusState) => asyncStatusState.stack,
);
const isProcessing = createSelector(
  asyncStatusState,
  (asyncStatusState) => asyncStatusState.stack.length > 0,
);
const asyncSuccess = (type: string) => createSelector(
  asyncStatusState,
  isProcessing,
  (asyncStatusState, isProcessing) => !isProcessing && !asyncStatusState.error.includes(type),
);

export const asyncStatusSelector = {
  asyncStatusState,
  stack,
  isProcessing,
  asyncSuccess,
};
