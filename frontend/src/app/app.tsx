import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { AppRouter } from './app.router';
import styles from './app.styles';
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
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={2000}
        draggable={false}
        className={styles.toastContainer}
      />
    </>
  );
};
