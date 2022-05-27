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
    catchError((err) => of(userAction.fetchUsers.failure({ errorMsg: err.response?.data }))),
  )),
);

export const userEpic = combineEpics(
  fetchUsersEpic,
);
