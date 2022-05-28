import { css } from '@emotion/css';
import * as React from 'react';
import InlineSVG from 'react-inlinesvg/esm';
import { Input } from '../input/input';
import * as styles from './input-search.styles';
import iconSearch from '~src/asset/icon/icon-search.svg';

export type PropsType = {
  value?: string;
  width?: number;
  height?: 28 | 34;
  placeholder?: string;
  disabled?: boolean;
  borderType?: 'default' | 'none' | 'bottom';
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const InputSearch: React.FC<PropsType> = ({
  value,
  width,
  height,
  placeholder,
  disabled = false,
  borderType = 'default',
  onChange,
  onKeyPress,
}) => (
  <div className={css(
    styles.Root,
    {
      width,
    },
  )}
  >
    <InlineSVG src={iconSearch} width={13} height={13} className={styles.Icon} />
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
