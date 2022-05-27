import { createSelector } from '@reduxjs/toolkit';
import { RootStateType } from '../store';
import { UserType } from '~src/types/data.type';

export type UserStateType = {
  users: { [id: string]: UserType; } | null;
};

export const initUserState: UserStateType = {
  users: null,
};

const userState = (state: RootStateType) => state.userState;
const users = createSelector(
  userState,
  (userState) => userState.users ?? {},
);
const usersFetched = createSelector(
  userState,
  (userState) => !!userState.users,
);
const usersList = createSelector(
  users,
  (users) => Object.values(users),
);
const userById = (userId: number) => createSelector(
  users,
  (users) => users[userId] ?? null,
);

export const userSelector = {
  userState,
  users,
  usersFetched,
  usersList,
  userById,
};
