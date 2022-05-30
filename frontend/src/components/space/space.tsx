import { css } from '@emotion/css';
import React from 'react';

type PropsType = {
  vertical?: number | 'auto';
  horizonal?: number | 'auto';
}

export const Space = ({
  vertical = 0,
  horizonal = 0,
}: PropsType) => {
  const root = css({
    display: horizonal ? 'inline-block' : 'block',
    marginTop: vertical,
    marginLeft: horizonal,
  });

  return (
    <div className={root} />
  );
};
