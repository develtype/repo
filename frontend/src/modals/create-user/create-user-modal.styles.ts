import { css } from '@emotion/css';

const content = css({
  width: 600,
  padding: 30,
  fontFamily: 'OpenSans',
  fontSize: 14,
  color: '#888888',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '150px auto',
});

const validateMessage = css({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  color: '#aaaaaa',
  fontSize: 12,
  height: 25,
});

const footer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 30px 30px',
});

export default {
  content,
  validateMessage,
  footer,
};
