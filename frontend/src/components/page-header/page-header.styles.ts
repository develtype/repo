import { css } from '@emotion/css';

const root = css({
  padding: '20px 30px',
  height: 100,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#f6f6f6',
});

const title = css({
  color: '#545454',
  fontSize: 20,
  fontWeight: 600,
});

const description = css({
  color: '#545454',
  fontSize: 14,
});

export default {
  root,
  title,
  description,
};
