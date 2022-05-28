import { css, cx } from '@emotion/css';
import * as React from 'react';
import styles from './input.styles';

type PropsType = {
  type: React.HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  width?: number;
  height?: 28 | 34;
  borderType?: 'default' | 'none' | 'bottom';
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<PropsType> = ({
  type,
  min,
  max,
  step,
  width,
  height = 28,
  borderType = 'default',
  ...props
}) => (
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
