import { createAction } from '@reduxjs/toolkit';

export function createAsyncAction<P = void, T extends string = string>(type: T) {
  const R = type;
  const S = `${type} success`;
  const F = `${type} failure`;
  const C = `${type} cancelled`;

  return {
    request: createAction<P>(R),
    success: createAction(S),
    failure: createAction<{ errorMsg?: string; }>(F),
    cancelled: createAction(C),
  };
}
