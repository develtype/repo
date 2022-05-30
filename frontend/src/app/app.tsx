import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { AppRoute } from './app.route';
import styles from './app.styles';
import { GlobalSpinner } from '~src/components/global-spinner/global-spinner';
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
      <AppRoute />
      <GlobalSpinner />
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
