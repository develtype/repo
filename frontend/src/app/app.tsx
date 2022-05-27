import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppRouter } from './app.router';
import { NavBar } from '~src/components/navbar/navbar';
import { userAction } from '~src/redux/user/user.action';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(userAction.fetchUsers.request());
    },
    [],
  );

  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};
