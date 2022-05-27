import { css } from '@emotion/css';
import * as React from 'react';

type PropsType = {
  vertical?: number | 'auto';
  horizonal?: number | 'auto';
}

export const Space: React.FC<PropsType> = ({
  vertical = 0,
  horizonal = 0,
}) => (
  <div
    className={css({
      display: horizonal ? 'inline-block' : 'block',
      marginTop: vertical,
      marginLeft: horizonal,
      label: 'Space',
    })}
  />
);
