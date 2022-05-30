import { css, cx } from '@emotion/css';
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import styles from './input.styles';

type PropsType = {
  type: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  width?: number;
  height?: 28 | 32;
  borderType?: 'default' | 'none' | 'bottom';
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  type,
  min,
  max,
  step,
  width,
  height = 28,
  borderType = 'default',
  ...props
}: PropsType) => (
  <input
    {...props}
    type={type}
    className={css(
      cx(
        styles.root,
        { [styles.outlined]: borderType === 'default' },
        { [styles.bottomlined]: borderType === 'bottom' },
      ),
      {
        width,
        height,
      },
    )}
    min={min}
    max={max}
    step={step}
  />
);
