import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { Spinner } from '../spinner/spinner';
import styles from './global-spinner.styles';
import { asyncStatusSelector } from '~src/redux/asyncstatus/asyncstatus.state';

const SpinnerModal = () => {
  const container = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(container);
    return (() => {
      document.body.removeChild(container);
    });
  }, [container]);

  return createPortal(
    <div className={styles.root}>
      <Spinner />
    </div>,
    container,
  );
};

export const GlobalSpinner = () => {
  const isProcessing = useSelector(asyncStatusSelector.isProcessing);

  return (
    <>
      {isProcessing && <SpinnerModal />}
    </>
  );
};
