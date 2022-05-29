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
    mergeMap(() => [
      userAction.createUser.success(),
      userAction.fetchUsers.request(),
    ]),
    catchError((err) => of(userAction.createUser.failure({ errorMsg: err.response?.message }))),
  )),
);

export const userEpic = combineEpics(
  fetchUsersEpic,
  createUserEpic,
);
