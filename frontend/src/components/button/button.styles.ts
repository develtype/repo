import { css } from '@emotion/css';

const root = css({
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.5,
  },
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

const smSize = css({
  padding: '0 10px',
  height: 28,
  fontSize: 12,
});

const mdSize = css({
  padding: '0 14px',
  height: 32,
  fontSize: 15,
});

const lgSize = css({
  padding: '0 22px',
  height: 40,
  fontSize: 19,
});

const fullSize = css({
  height: 40,
  width: '100%',
  fontSize: 19,
});

const smIcon = css({
  width: 12,
  height: 12,
});

const mdIcon = css({
  width: 15,
  height: 15,
});

const lgIcon = css({
  width: 19,
  height: 19,
});

const label = css({
  fontWeight: 'bold',
});

const rounded = css({
  borderRadius: 4,
});

const greenBlue = css({
  border: 'solid 2px #6dabb1',
  backgroundColor: '#6dabb1',
});

const coolGrayFontColor = css({
  color: '#6dabb1',
});

const whiteFontColor = css({
  color: 'white',
});

const outlined = css({
  backgroundColor: 'unset',
});

export default {
  root,
  smSize,
  mdSize,
  lgSize,
  fullSize,
  smIcon,
  mdIcon,
  lgIcon,
  label,
  rounded,
  greenBlue,
  coolGrayFontColor,
  whiteFontColor,
  outlined,
};

