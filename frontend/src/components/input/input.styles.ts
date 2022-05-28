import { css } from '@emotion/css';

const root = css({
  width: '100%',
  boxSizing: 'border-box',
  fontSize: 13,
  padding: '0 10px',
  border: '0px',
  '&::placeholder': {
    color: '#aaaaaa',
  },
  ':focus': {
    outline: 'none',
  },
  '&[type="search"]': {
    padding: '0 10px 0 30px',
  },
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  label: 'Input',
});

const outlined = css({
  border: 'solid 1px #aaaaaa',
});

const bottomlined = css({
  borderBottom: 'solid 1px #aaaaaa',
});

export default {
  root,
  outlined,
  bottomlined,
};
