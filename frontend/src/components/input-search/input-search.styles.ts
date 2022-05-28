import { css } from '@emotion/css';

function getStyleName(a: string) { return `InputSearch__${a}`; }

export const Root = css({
  width: '100%',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  label: getStyleName('Root'),
});

export const Icon = css({
  position: 'absolute',
  color: '#999999',
  left: 10,
  label: getStyleName('Icon'),
});
