import { css } from '@emotion/css';

const root = css({
  width: 800,
  padding: '20px 30px',
});

const controlWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
});

const controlLabel = css({
  fontSize: 18,
  color: '#666666',
  fontWeight: 600,
});

const content = css({
  fontFamily: 'OpenSans',
  fontSize: 14,
  color: '#888888',
});

const contentItem = css({
  width: '100%',
  height: 50,
  display: 'flex',
});

const itemLabel = css({
  paddingTop: 6,
  width: 100,
});

const itemValue = css({
  paddingTop: 6,
  flex: 1,
});

const inputWrapper = css({
  flex: 1,
  display: 'flex',
});

const validateMessage = css({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  color: '#aaaaaa',
  fontSize: 12,
});

export default {
  root,
  controlWrapper,
  controlLabel,
  content,
  contentItem,
  itemLabel,
  itemValue,
  inputWrapper,
  validateMessage,
};
