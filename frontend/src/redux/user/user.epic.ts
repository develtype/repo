import { Action } from 'redux';
import { combineEpics, Epic } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators';
import { userAction } from './user.action';
import { userService } from './user.service';

const fetchUsersEpic: Epic = (
  actions$: Observable<Action>,
) => actions$.pipe(
  filter(userAction.fetchUsers.request.match),
  switchMap(() => userService.fetchUsers().pipe(
    mergeMap(({ data }) => [
      userAction.fetchUsers.success(),
      userAction.setUsers(data),
    ]),
    catchError((err) => of(userAction.fetchUsers.failure({ errorMsg: err.response?.message }))),
  )),
);

const createUserEpic: Epic = (
  actions$: Observable<Action>,
) => actions$.pipe(
  filter(userAction.createUser.request.match),
  switchMap(({ payload }) => userService.createUser(payload).pipe(
    mergeMap(({ data }) => [
      userAction.createUser.success(),
      userAction.setUser({ id: data.id, ...payload }),
    ]),
    catchError((err) => of(userAction.createUser.failure({ errorMsg: err.response?.message }))),
  )),
);

const updateUserEpic: Epic = (
  actions$: Observable<Action>,
) => actions$.pipe(
  filter(userAction.updateUser.request.match),
  switchMap(({ payload }) => userService.updateUser(payload).pipe(
    mergeMap(() => [
      userAction.updateUser.success(),
      userAction.setUser(payload),
    ]),
    catchError((err) => of(userAction.createUser.failure({ errorMsg: err.response?.message }))),
  )),
);

const deleteUserEpic: Epic = (
  actions$: Observable<Action>,
) => actions$.pipe(
  filter(userAction.deleteUser.request.match),
  switchMap(({ payload }) => userService.deleteUser(payload).pipe(
    mergeMap(() => [
      userAction.deleteUser.success(),
      userAction.removeUser(payload),
    ]),
    catchError((err) => of(userAction.createUser.failure({ errorMsg: err.response?.message }))),
  )),
);

export const userEpic = combineEpics(
  fetchUsersEpic,
  createUserEpic,
  updateUserEpic,
  deleteUserEpic,
);
