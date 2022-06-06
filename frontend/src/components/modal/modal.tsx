import { cx } from '@emotion/css';
import React, { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import InlineSVG from 'react-inlinesvg/esm';
import styles from './modal.styles';
import iconX from '~src/assets/icon/icon-x.svg';

export type PropsType = {
  title: string;
  alignV?: 'top' | 'bottom' | 'center';
  alignH?: 'left' | 'right' | 'center';
  children: ReactNode;
  onClose(): void;
};

export const Modal = ({
  title,
  alignV = 'center',
  alignH = 'center',
  children,
  onClose,
}: PropsType) => {
  const container = document.createElement('div');

  useEffect(
    () => {
      document.body.appendChild(container);
      return (() => {
        document.body.removeChild(container);
      });
    },
    [container],
  );

  return createPortal(
    <div
      className={cx(
        styles.root,
        { [styles.alignVModalTop]: alignV === 'top' },
        { [styles.alignVModalCenter]: alignV === 'center' },
        { [styles.alignVModalBottom]: alignV === 'bottom' },
        { [styles.alignHModalLeft]: alignH === 'left' },
        { [styles.alignHModalCenter]: alignH === 'center' },
        { [styles.alignHModalRight]: alignH === 'right' },
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <span
            className={styles.headerTitle}
          >
            {title}
          </span>
          <InlineSVG
            className={styles.closeButton}
            width={12}
            height={12}
            src={iconX}
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>,
    container,
  );
};
