import { css } from '@emotion/css';
import React, { ChangeEvent, KeyboardEvent } from 'react';
import InlineSVG from 'react-inlinesvg/esm';
import { Input } from '../input/input';
import styles from './input-search.styles';
import iconSearch from '~src/asset/icon/icon-search.svg';

export type PropsType = {
  value?: string;
  width?: number;
  height?: 28 | 32;
  placeholder?: string;
  disabled?: boolean;
  borderType?: 'default' | 'none' | 'bottom';
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export const InputSearch = ({
  value,
  width,
  height,
  placeholder,
  disabled = false,
  borderType = 'default',
  onChange,
  onKeyPress,
}: PropsType) => (
  <div className={css(
    styles.root,
    {
      width,
    },
  )}
  >
    <InlineSVG src={iconSearch} width={13} height={13} className={styles.icon} />
    <Input
      type="search"
      value={value}
      width={width}
      height={height}
      placeholder={placeholder}
      disabled={disabled}
      borderType={borderType}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  </div>
);
