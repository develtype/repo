import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { asyncStatusReducer } from './asyncstatus/asyncstatus.action';
import { asyncStatusEpic } from './asyncstatus/asyncstatus.epic';
import { userReducer } from './user/user.action';
import { userEpic } from './user/user.epic';

const reducer = combineReducers({
  userState: userReducer,
  asyncStatusState: asyncStatusReducer,
});

export type RootStateType = ReturnType<typeof reducer>

const epicMiddleware = createEpicMiddleware();
const epic = combineEpics(
  userEpic,
  asyncStatusEpic,
);

export const rootStore = configureStore({
  reducer,
  middleware: [epicMiddleware],
});
epicMiddleware.run(epic);
