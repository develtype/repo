import { Action } from 'redux';
import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { userAction } from '../user/user.action';
import { asyncStatusAction } from './asyncstatus.action';
import { toastTool } from '~src/tools/toast.tool';

const asyncActions = [
  userAction.fetchUsers,
  userAction.createUser,
  userAction.updateUser,
];

const asyncStartEpic: Epic = (
  actions$: Observable<Action>,
) => actions$.pipe(
  filter((action) => asyncActions.map((aa) => aa.request.type).includes(action.type)),
  mergeMap(({ type }: { type: string; }) => [
    asyncStatusAction.initError({ type }),
    asyncStatusAction.asyncStart({ type }),
  ]),
);

const asyncStopSuccessEpic: Epic = (
  actions$: Observable<Action>,
) => actions$.pipe(
  filter((action) => asyncActions.map((aa) => aa.success.type).includes(action.type)),
  map(({ type }: { type: string; }) => asyncStatusAction.asyncEnd({ type: type.replace(' success', '') })),
);

const asyncStopFailureEpic: Epic = (
  actions$: Observable<{ type: string; payload: { errorMsg?: string; }; }>,
) => actions$.pipe(
  filter((action) => asyncActions.map((aa) => aa.failure.type).includes(action.type)),
  mergeMap(({ type, payload: { errorMsg } }) => {
    if (errorMsg) {
      toastTool.error(errorMsg);
    }
    return [
      asyncStatusAction.setError({ type: type.replace(' failure', '') }),
      asyncStatusAction.asyncEnd({ type: type.replace(' failure', '') }),
    ];
  }),
);

const asyncStopCancelledEpic: Epic = (
  actions$: Observable<Action>,
) => actions$.pipe(
  filter((action) => asyncActions.map((aa) => aa.cancelled.type).includes(action.type)),
  mergeMap(({ type }: { type: string; }) => [
    asyncStatusAction.asyncEnd({ type: type.replace(' cancelled', '') }),
  ]),
);


export const asyncStatusEpic = combineEpics(
  asyncStartEpic,
  asyncStopSuccessEpic,
  asyncStopFailureEpic,
  asyncStopCancelledEpic,
);
