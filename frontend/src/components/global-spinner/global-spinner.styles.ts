import { css } from '@emotion/css';

const root = css({
  position: 'absolute',
  zIndex: 90,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  minWidth: 800,
  minHeight: 700,
  backgroundColor: 'rgb(0 0 0 / 0.45)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
});

export default {
  root,
};
