import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { userReducer } from './user/user.action';
import { userEpic } from './user/user.epic';

const reducer = combineReducers({
  userState: userReducer,
});

export type RootStateType = ReturnType<typeof reducer>

const epicMiddleware = createEpicMiddleware();
const epic = combineEpics(
  userEpic,
);

export const rootStore = configureStore({
  reducer,
  middleware: [epicMiddleware],
});
epicMiddleware.run(epic);
