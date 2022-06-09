import { createAction, createReducer } from '@reduxjs/toolkit';
import { CreateUserParamsType, DeleteUserParamsType, UpdateUserParamsType } from './user.service';
import { initUserState } from './user.state';
import { createAsyncAction } from '~src/redux/redux.util';
import { UserType } from '~src/types/data.type';

const fetchUsers = createAsyncAction('[user] fetch users');
const setUsers = createAction<UserType[]>('[user] set users');
const createUser = createAsyncAction<CreateUserParamsType>('[user] create user');
const updateUser = createAsyncAction<UpdateUserParamsType>('[user] update user');
const setUser = createAction<UserType>('[user] set user');
const deleteUser = createAsyncAction<DeleteUserParamsType>('[user] delete user');
const removeUser = createAction<{ id: string; }>('[user] remove user');

export const userAction = {
  fetchUsers,
  setUsers,
  createUser,
  updateUser,
  setUser,
  deleteUser,
  removeUser,
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
    .addCase(
      setUser,
      (state, { payload }) => {
        if (!state.users) {
          state.users = {};
        }
        state.users[payload.id] = payload;
      },
    )
    .addCase(
      removeUser,
      (state, { payload }) => {
        if (state.users) {
          delete state.users[payload.id];
        }
      },
    )
  ,
);
