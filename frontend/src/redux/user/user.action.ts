import { createAction, createReducer } from '@reduxjs/toolkit';
import { initUserState } from './user.state';
import { createAsyncAction } from '~src/redux/redux.util';
import { UserType } from '~src/types/data.type';

const fetchUsers = createAsyncAction('[user] fetch users');
const setUsers = createAction<UserType[]>('[user] set users');

export const userAction = {
  fetchUsers,
  setUsers,
};

export const userReducer = createReducer(
  initUserState,
  (builder) => builder
    .addCase(
      setUsers,
      (state, { payload }) => {
        state.users = payload.reduce(
          (res, user) => {
            res[user.id] = user;
            return res;
          },
          {} as { [userId: string]: UserType; },
        );
      },
    )
  ,
);